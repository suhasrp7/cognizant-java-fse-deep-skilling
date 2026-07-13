# Spring REST using Spring Boot 3

## Description

This exercise demonstrates the implementation of a simple RESTful Web Service using Spring Boot 3.

A REST controller is created to expose an endpoint that returns a Country object in JSON format. The application follows a layered architecture consisting of Controller, Service, and Model classes.

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
│       │       │   └── CountryController.java
│       │       ├── model
│       │       │   └── Country.java
│       │       ├── service
│       │       │   └── CountryService.java
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

```
GET /country
```

## Expected Output

```json
{
  "code": "IN",
  "name": "India"
}
```

## Concepts Implemented

- Spring Boot 3
- REST Controller
- Dependency Injection
- Service Layer
- Model Class
- JSON Response
- Maven Project

## Author

**Shankaragouda Patil**