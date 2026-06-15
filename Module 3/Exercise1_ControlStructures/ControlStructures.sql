-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60 years

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

-- Scenario 2: Mark customers as VIP if balance is greater than 10000

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

-- Scenario 3: Send reminders for loans due within next 30 days

DECLARE
BEGIN
FOR loan_rec IN (
SELECT CustomerID, EndDate
FROM Loans
WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30
)
LOOP
DBMS_OUTPUT.PUT_LINE(
'Reminder sent to Customer ' || loan_rec.CustomerID
);
END LOOP;
END;
/
