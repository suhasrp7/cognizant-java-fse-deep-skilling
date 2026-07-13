# Hello World RESTful Web Service

## Description

This hands-on demonstrates creating a simple RESTful Web Service using Spring Boot.

A REST controller exposes a GET endpoint `/hello` that returns the string **"Hello World!!"**.

## Technologies Used

- Java
- Spring Boot 3
- Spring Web
- Maven

## Project Structure

```
spring-learn
│
├── src
│   └── main
│       ├── java
│       │   └── com.cognizant.springlearn
│       │       ├── controller
│       │       │   └── HelloController.java
│       │       └── SpringLearnApplication.java
│       │
│       └── resources
│           └── application.properties
│
├── pom.xml
├── README.md
└── Output.png
```

## REST Endpoint

| Method | URL | Response |
|--------|-----|----------|
| GET | /hello | Hello World!! |

## Expected Output

```
Hello World!!
```

## Concepts Implemented

- REST Controller
- GET Mapping
- Spring Boot
- Spring Web
- Logging using SLF4J

## Author

**Shankaragouda Patil**