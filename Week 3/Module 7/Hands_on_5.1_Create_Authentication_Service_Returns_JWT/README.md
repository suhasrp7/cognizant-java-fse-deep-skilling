# Create Authentication Service that Returns JWT

## Objective

Create a Spring Boot REST service that authenticates a user using Basic Authentication and returns a JSON Web Token (JWT).

## Technologies Used

- Java 17+
- Spring Boot 3
- Spring Web
- Spring Security
- Maven
- JJWT (JSON Web Token)

## Project Structure

```
src
 └── main
     ├── java
     │    └── com.cognizant.springlearn
     │          ├── controller
     │          ├── config
     │          └── SpringLearnApplication.java
     └── resources
          └── application.properties
```

## Endpoint

```
GET /authenticate
```

## Authentication

Username:

```
user
```

Password:

```
pwd
```

## Sample Response

```json
{
  "token":"eyJhbGciOiJIUzI1NiJ9..."
}
```

## Output

Authentication popup is displayed and a valid JWT token is returned after successful authentication.

## Author

**Shankaragouda Patil**