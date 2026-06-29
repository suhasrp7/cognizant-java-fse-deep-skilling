DECLARE
BEGIN
FOR customer_rec IN (
SELECT CustomerID, Balance
FROM Customers
)
LOOP
IF customer_rec.Balance > 10000 THEN
DBMS_OUTPUT.PUT_LINE(
'Customer ' || customer_rec.CustomerID || ' is VIP'
);
END IF;
END LOOP;
END;
/