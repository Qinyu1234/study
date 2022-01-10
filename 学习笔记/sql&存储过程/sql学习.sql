语法:
	/* 	表table1     dept
			部门编号(deptno)	部门名称(dname)  部门所在位置(loc)
				1					技术部			一楼A区
				2					销售部			一楼B区
				3					行政部			一楼C区
		员工表table2	employees
			员工号(empno)	姓名(name) 部门(deptno) 经理(mangager) 入职时间(hiredate) 薪水(salary)
				1				张三	1				2				2011-03-03 		4400.00	
		table3	managers
			员工号(empno) 	头衔(title)
			2				技术部经理
	*/

	/*创建表*/
		create table table1(
			deptno int primary key,
			dename varchar(9),
			loc varchar(10)
		)
		create table table2(
			empno int PRIMARY KEY,
			name char(10) NOT null,
			deptno int,
			manager int,
			hiredate date,
			salary number(7,2)
		)
		create table table3(
			empno int PRIMARY KEY,
			title varchar(16)
		)
	/*插入table2*/
		insert into table2 values(1,'臧三',1,2,'2011-03-03',4400.00)
		insert into table2 (empno,name,hiredate,salary) values(9,'李四','2011-04-03',5000.00)
	/*查询*/
		select *from table1
		select empno,name from table2
		select distinct empno from table2 /*distinct去重*/
		select empno from table2 where empno=9 and salary>5000  /*and or*/

		/* like
			在where子句中使用like运算符来搜索匹配字符串中的指定模式,百分号%,匹配零个,一个或多个字符
			select 字端名 from 表名 where 字段名 like 字符串*/
			select *from table1 where loc like '一楼%' /*只要出现一楼,都会被赛选出来*/
		/*in 匹配多个值 多个or的合并写法
			select 字端名 from 表名 where 字段名 in (值1,值2,...)*/
			select *from table1 where empno in (3,5)
			/*等同*/
			select *from table1 where empno=3 or empno=5 
			/*根据table1返回的数据查table2*/
			select name from table2 where deptno in(select deptno from table1 where loc like '一楼%') 
		/* between 两者之间的值 可以是数字/字符串/日期 包括开始(>=)/结束值(<=) 
			select 字端名 from 表名 where 字段名 between 值1 and 值2 */
			select name from table2 where hiredate between '2013-01-01' and '2013-12-31'
			select name from table2 where hiredate not between '2013-01-01' and '2013-12-31'
		/* order by 排序      默认升序(asc),也可以降序(desc)
			select 字端名 from 表名 order by字段1,字段2,...asc|desc*/
			select name from table2 order by salary

	/*更新update*/
		update table2 set salary=5232,mangager=3 where empno=1

	/*删除delete
		delete from 表明 where 子句
		没有子句,删除所有子句*/
		
	/*join连接
		内连接(inner join):列出两个表中都存在的记录
		左连接(left join):即使没有匹配也列出左表中的所有记录
		右连接(right join):即使没有匹配也列出右表中的所有记录
		select 字段名 as from 表1 join 表2 where 子句*/
	select name,title from table2 inner join table3 on table2.empno=table3.empno
		
	/*别名 as
		select 字短名 as 别名 from 表名 as 别名
		as可以省略*/ 
		select name 姓名,salary 工资 from table2 e
		select count(*) 总人数 from table2	/*统计人数*/

	/*index 索引  提高访问速度
		create index 索引名 on 表明(字段1,字段2)*/

	/*view 视图  总是显示当前的数据,每当查询视图时,数据库引擎通过使用SQL语句重建数据
		create view 视图名 as select语句*/
		create view view_table2 as select name,salary from table2 where hiredate<'2015-01-01' 
		update view_table2 set salary=salary+400 where name='张三' /*底层也会改*/
		select *from view_table2
		
	/*null     is null 或者 is not null*/

	/*SubQuery 子查询(嵌套查询),用于为主查询返回其所需数据,或对检索数据进行进一步的限制
		select 字段1,字段2,...from 表名 where 字段名 操作符(子查询)*/
		select name from table2 where deptno in(select deptno from table1 where loc like '一楼%')
		
常用函数
	/*count函数 统计*/
		select count(*) from table2 /*统计所有员工*/
		select count(depton) from table2 /*统计所有部门号不为null的员工*/
		select *from table2 where depton is null /*统计所有部门号为null的员工*/
		
	/*max min函数 返回所选字段最大值/最小值 
		max(字段名)		最大值
		min(字段名)		最小值 
		avg(字段名)		平均值 
		sum(字段名)		合计值 
	*/
		select max(salary) from table2
	
	/*group by 分组 结合统计函数,根据一个或多个列对结果集进行分组
		select 字段名,统计函数from 表名 where 子句 group by 字段名*/
		
	/*having 过滤分组 having子句和where子句类似,都是对查询结果进行过滤
		区别 where对被选择的列进行过滤		having对group by产生的组进行过滤
		select 字段名,统计函数from 表名 where 子句 group by 字段名 having 统计函数 运算符 值*/	
		select deptno,avg(salary) from table2 group by deptno
		select deptno,avg(salary) from table2 group by deptno having avg(salary) <4500
		