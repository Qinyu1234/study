drop PROCEDURE if exists [存储过程名字]
--分页
GO
/****** Object:  StoredProcedure [dbo].[GetTableInfo]    Script Date: 2022/1/3 21:57:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [存储过程名字]
	@MachineId char(8)=null,
	@BranchNo int=null,
	@Pag int = 1,
	@PagSize int = 10
AS
	declare @sql varchar(1000) = 'with t1 as (select row_number() over(order by BranchNo) rownum,*from [表名] t where 1=1'
begin
	SET NOCOUNT ON;
    
    begin try
        if	(@BranchNo is not null and @BranchNo !='')
        set @sql = @sql +'and t.BranchNo='+ cast(@BranchNo as char(5))
        if	(@MachineId is not null and @MachineId !='')
        set @sql = @sql +'and MachineId='+ @MachineId
        set @sql = @sql +') select top '+cast(@PagSize as char(7))+' *,(select sum(1) from t1) total from t1 where rownum >'
                    +cast(((@Pag-1)*@PagSize) as char(10))
	    exec (@sql)
    end try

    begin catch
        select '1' resultFlag,'数据库查询失败,请稍后重试' as resultFlag
    end catch
end
