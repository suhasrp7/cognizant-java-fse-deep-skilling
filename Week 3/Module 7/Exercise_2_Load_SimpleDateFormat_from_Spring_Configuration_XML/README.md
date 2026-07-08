# Spring Core - Load SimpleDateFormat from Spring Configuration XML

## Description

This exercise demonstrates loading a `SimpleDateFormat` bean from a Spring XML configuration file and retrieving it using the Spring IoC Container.

The bean is configured in `date-format.xml` with the pattern `dd/MM/yyyy`. The application loads the bean, parses the date `31/12/2018`, and displays the parsed `Date` object.

## Technologies Used

- Java
- Spring Boot 3
- Spring Core
- Maven

## Project Structure

```
spring-learn
│
├── src
│   └── main
│       ├── java
│       │   └── com.cognizant.springlearn
│       │       └── SpringLearnApplication.java
│       │
│       └── resources
│           ├── application.properties
│           └── date-format.xml
│
├── pom.xml
├── README.md
└── Output.png
```

## Spring Bean Configuration

- Bean Name: `dateFormat`
- Class: `java.text.SimpleDateFormat`
- Pattern: `dd/MM/yyyy`

## Expected Output

```text
Mon Dec 31 00:00:00 IST 2018
```

## Concepts Implemented

- Spring XML Configuration
- Spring IoC Container
- Bean Definition
- ClassPathXmlApplicationContext
- SimpleDateFormat Bean
- Constructor Injection

## Author

**Shankaragouda Patil**