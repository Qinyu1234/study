/*存储过程,封装sql语句,用于完成比较复杂的业务逻辑,可以入参出参*/

/*声明结束符	
	因为mysql默认使用';'作为结束符,
	而在存储过程中,会使用';',作为一段语句的结束,
	导致';'使用冲突*/
delimiter $$
concat --拼接
handler --句柄 当暴露错是,给个标记,让你退出
/*删除*/
drop hell_procedure()
/*简单演示*/
	create procedure hell_procedure()
	BEGIN
		select 'hello procedure';
	END $$
	call hell_procedure()

/*变量及赋值 */

	--局部变量	BEGIN/END中有效
		--declare 声明变量		declare var_name varchar(32) [default var_name]
			declare var_name VARCHAR(32)
		--set	赋值
			create procedure sp_var01()
			BEGIN
				declare nickname varchar(32) default 'SF'
				set nickname = 'ZS';
				select nickname
			END $$
		--into	赋值		
			declare nickname into default 0
		
	--用户变量 当前会话(连接)有效 	不需要提前声明,使用即声明
		@var_name 
		
					--ps:基本不用
						--会话变量	系统提供,当前会话(连接)有效
							@@session.var_name
						--全局变量	系统提供,整个mysql服务器有效
							@@global.var_name
/*入参 出参*/
	--in out inout param_name type
		--in	入参
			create procedure sp_var_01(in age int)
			BEGIN
				set @user_ag =age;
				select @user_ag
			END $$
		--out	出参
			create procedure sp_var_02(in loc varchar(64),out dept_no int(11))
			BEGIN
				select d.deptno into dept_no from dept d where d.loc = loc
			END $$
			--测试
			call sp_var02('loc的值',@dept_no)
			select @dept_no
		--inout

/*流程控制*/
	--if
		if search_condition then statement_list(执行语句)
			[else if search_condition then statement_list(执行语句)]
			[else statement_list(执行语句)]
		end if
							--ps 基本不用
								--CASE	不仅用在存储过程,查询语句也可以使用	
									--语法一
										CASE name
											when 'aa' then statement_list
											[when 'bb' then statement_list]...
											[else statement_list]
										end CASE
									--语法二
										CASE
											when search_condition then statement_list
											[when search_condition then statement_list]...
											[else statement_list]
										end CASE
/*流程控制 循环*/
	--语句	LOOP是死循环,需要leave主动退出
		[bugin_label:] LOOP
			statement_list(执行语句)
		END LOOP[end_label]
		
		--leave控制循环
			create procedure sp_flow_loop()
			BEGIN
				declare c_index int default 1;
				declare result_str varchar(256) default '1';
				cnt:LOOP
					if c_index >= 10
					then leave cnt;
					end if
					
					set c_index = c_index +1;
					set result_str = concat(result_str,',',c_index)
				end loop cnt;
				select result_str;
			end
		
		--iterate + leave控制循环
			create procedure sp_flow_loop2()
			BEGIN
				declare c_index int default 1;
				declare result_str varchar(256) default '1';
				cnt:LOOP
					set c_index = c_index +1;
					set result_str = concat(result_str,',',c_index)
					if c_index < 10 then iterate cnt
					end if
					leave cnt;
				end loop cnt;
				select result_str;
			end
			
		--repeat 类似do{}while()
		--while	类似while(){}
		
		--游标,逐行循环,效率很低
			--声明变量,游标声明,handler声明必须按照先后顺序
			
				--声明语法
				declare cursor_name cursor for select_statement
				--打开语法
				open cursor_name
				--取值语法	fetch到底报错no data 
				--如果有很多条数据,每次只拿一条
				fetch cursor_name into var_name [,var_name] ...
				--关闭语法
				close cursor_name
					
					--涨薪
					create procedure high_sal(in dept_name varchar(32))
					BEGIN
						declare e_no int;
						declare e_name varchar(32);
						declare e_sal decimal(7,2);
						declare lp_flag boolean default true;
						
						declare emp_cursor cursor for
							select e.empno,e.name,e.sal
							from emp e ,dept d 
							where e.deptno = d.deptno and d.dname = dept_name;
						
						--handler 句柄 handler_action:continue exit undo
						--用法declare handler_action handler for condition_value [,condition_value] statement
						--1329	no data的报错码,不过一般用not found
						declare continue handler for 1329 set lp_flag = false
						
						open emp_cursor;
						
						emp_loop:LOOP
							fetch emp_cursor into e_no,e_name,e_sal;
							if lp_flag then
								--select e_no,e_name,e_sal;
								if e_name = 'king' THEN 
									iterate emp_loop --除了老板
									else update emp e set e.sal = e.sal+100 where e.empno = e_no;
								end if
							ELSE
								leave emp_loop;
							end if;
							
						end loop emp_loop;
							set @end_loop = 'end'
						
						close emp_cursor;
					end