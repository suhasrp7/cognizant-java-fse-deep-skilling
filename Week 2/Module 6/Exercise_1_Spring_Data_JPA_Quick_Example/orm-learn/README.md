# Spring Data JPA - Quick Example

## Description

This exercise demonstrates the implementation of Spring Data JPA using Spring Boot, Hibernate, and MySQL.

The application connects to a MySQL database and retrieves country details using Spring Data JPA Repository. The Country entity is mapped with the database table, and the data is accessed through the service and repository layers.

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven

## Project Structure

```
orm-learn
│
├── src
│   └── main
│       ├── java
│       │   └── com.cognizant.ormlearn
│       │       ├── model
│       │       │   └── Country.java
│       │       ├── repository
│       │       │   └── CountryRepository.java
│       │       ├── service
│       │       │   └── CountryService.java
│       │       └── OrmLearnApplication.java
│       │
│       └── resources
│           └── application.properties
│
├── pom.xml
├── README.md
└── Output.png
```

## Database Details

Database Name:

```
ormlearn
```

Table Name:

```
country
```

Table Columns:

- co_code
- co_name

## Output

```
Inside getAllCountries

Hibernate:
select
    c1_0.co_code,
    c1_0.co_name
from
    country c1_0

Country [code=IN, name=India]
Country [code=US, name=United States]

BUILD SUCCESS
```

## Concepts Implemented

- Spring Boot Configuration
- Spring Data JPA Repository
- Hibernate ORM Mapping
- Entity Creation using @Entity
- Service Layer Implementation
- Dependency Injection
- MySQL Database Integration

## Author

**Shankaragouda Patil**