DECLARE
CURSOR customer_cursor IS
SELECT CustomerID,
FLOOR(MONTHS_BETWEEN(SYSDATE, DOB)/12) AS Age
FROM Customers;
BEGIN
FOR customer_rec IN customer_cursor LOOP
IF customer_rec.Age > 60 THEN
UPDATE Loans
SET InterestRate = InterestRate - 1
WHERE CustomerID = customer_rec.CustomerID;
END IF;
END LOOP;
COMMIT;
END;
/

