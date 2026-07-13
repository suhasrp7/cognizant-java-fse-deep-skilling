# REST - Get Country Based on Country Code

## Description

This hands-on demonstrates creating a RESTful Web Service using Spring Boot that returns a country based on the country code provided in the URL.

The country details are loaded from a Spring XML configuration file and searched using the service layer.

## Technologies Used

- Java
- Spring Boot 3
- Spring Core
- Spring Web
- Maven

## REST Endpoint

| Method | URL | Description |
|--------|-----|-------------|
| GET | /countries/{code} | Returns country details based on country code |

## Sample Requests

```
GET /countries/IN
```

Response

```json
{
  "code": "IN",
  "name": "India"
}
```

```
GET /countries/US
```

Response

```json
{
  "code": "US",
  "name": "United States"
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
- Path Variable
- Spring XML Bean Configuration
- Service Layer
- JSON Response

## Author

**Shankaragouda Patil**