# Difference Between JPA, Hibernate and Spring Data JPA

## Description

This exercise explains the differences between JPA, Hibernate, and Spring Data JPA, which are commonly used technologies for database interaction in Java applications.

JPA provides the specification, Hibernate provides the implementation of JPA, and Spring Data JPA simplifies database operations by reducing boilerplate code.

---

## 1. JPA (Java Persistence API)

JPA is a Java specification used for managing relational data in Java applications.

### Features:

- Provides standard rules for Object Relational Mapping (ORM)
- Uses annotations to map Java objects with database tables
- Defines interfaces and guidelines
- Does not provide implementation by itself

### Example:

```java
@Entity
public class Employee {

    @Id
    private int id;

    private String name;
}
```

---

## 2. Hibernate

Hibernate is an ORM framework that implements JPA specifications.

### Features:

- Provides actual implementation of JPA
- Converts Java objects into database records
- Reduces JDBC code
- Supports caching and transaction management

### Example:

```java
Session session = sessionFactory.openSession();

Employee employee = session.get(Employee.class, 1);
```

---

## 3. Spring Data JPA

Spring Data JPA is a Spring framework module built on top of JPA.

### Features:

- Simplifies database operations
- Provides repository interfaces
- Reduces boilerplate DAO code
- Automatically implements common CRUD operations

### Example:

```java
public interface EmployeeRepository 
        extends JpaRepository<Employee, Integer> {

}
```

---

## Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|---|---|---|---|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | Uses JPA implementation |
| Purpose | Defines ORM rules | Performs ORM operations | Simplifies database access |
| Boilerplate Code | More | Medium | Very Less |
| Database Operations | EntityManager | Session API | Repository Interface |
| Dependency | Independent | Implements JPA | Uses Hibernate/JPA |

---

## Conclusion

JPA defines the standard for persistence, Hibernate implements those standards, and Spring Data JPA provides an easier abstraction layer to perform database operations efficiently.

## Author

**Shankaragouda Patil**