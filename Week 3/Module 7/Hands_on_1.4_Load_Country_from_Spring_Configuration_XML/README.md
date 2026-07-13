# Spring Core - Load Country from Spring Configuration XML

## Description

This exercise demonstrates loading a `Country` bean from a Spring XML configuration file using the Spring IoC Container.

The bean is configured in `country.xml` using setter injection. The application loads the bean and displays the country details.

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
│       │       ├── model
│       │       │   └── Country.java
│       │       └── SpringLearnApplication.java
│       │
│       └── resources
│           ├── application.properties
│           └── country.xml
│
├── pom.xml
├── README.md
└── Output.png
```

## Spring Bean Configuration

- Bean Name: `country`
- Class: `com.cognizant.springlearn.model.Country`

## Expected Output

```
Inside Country Constructor.
Inside setCode()
Inside setName()
Country [code=IN, name=India]
```

## Concepts Implemented

- Spring IoC Container
- Spring XML Configuration
- Bean Definition
- Setter Injection
- ClassPathXmlApplicationContext

## Author

**Shankaragouda Patil**