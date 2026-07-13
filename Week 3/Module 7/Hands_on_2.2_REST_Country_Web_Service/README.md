# REST Country Web Service

## Description

This hands-on demonstrates creating a RESTful Web Service using Spring Boot that returns Country details loaded from a Spring XML configuration file.

## Technologies Used

- Java
- Spring Boot 3
- Spring Core
- Spring Web
- Maven

## REST Endpoint

| Method | URL | Response |
|--------|-----|----------|
| GET | /country | Country JSON |

## Expected Output

```json
{
  "code": "IN",
  "name": "India"
}
```

## Project Structure

```
spring-learn
│
├── controller
│   └── CountryController.java
├── model
│   └── Country.java
├── service
│   └── CountryService.java
├── resources
│   ├── application.properties
│   └── country.xml
└── SpringLearnApplication.java
```

## Concepts Implemented

- REST Controller
- Spring Bean Configuration (XML)
- Dependency Injection
- Service Layer
- JSON Response

## Author

**Shankaragouda Patil**