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