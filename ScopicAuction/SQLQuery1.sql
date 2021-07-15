
--

--drop proc UpdateItemTime

update item set CloseDate = newI from item JOIN (select itemid, (CloseDate - 100) newI from item ) xx on xx.ItemId = Item.ItemId

/*

select DATEADD(second, 10000, CloseDate) from item 

 -- UpdateItemTime '1/1/2520 12:00:00 AM'


CREATE PROC UpdateItemTime @TIME datetime2
AS
--UPDATE Item set CloseDate = @TIME;
DECLARE @CloseDate datetime2 

DECLARE db_cursor CURSOR FOR 
SELECT CloseDate 
FROM Item 
WHERE ClosedItem = 'false'

OPEN db_cursor  
FETCH NEXT FROM db_cursor INTO @CloseDate 

WHILE @@FETCH_STATUS = 0  
BEGIN  
      --SET @CloseDate = CAST(@time AS datetime2)  + CAST(@CloseDate AS datetime2)
      DATEADD(millisecond, @time, @CloseDate)
  
      FETCH NEXT FROM db_cursor INTO @CloseDate 
END 

CLOSE db_cursor  
DEALLOCATE db_cursor 



--set CloseDate = (select DATEADD(second, 10000, CloseDate) from item )


update item 
set CloseDate = newd
from item 
JOIN  (select itemid, DATEADD(second, 10000, CloseDate) newd from item ) xx on xx.ItemId = Item.ItemId

select  * from item 
*/

--set CloseDate = (select DATEADD(second, 10000, CloseDate) from item )


/*
update item  
set CloseDate = (select itemid, DATEADD(second, 10000, CloseDate) from item )
where ItemId = x.ItemId
select *, Itemid, CloseDate, DATEADD(second, 10000, CloseDate) from item 

*/