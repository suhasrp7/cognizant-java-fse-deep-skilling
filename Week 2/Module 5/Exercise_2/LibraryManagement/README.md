# Library Management - Exercise 2 (Setter Injection)

## Overview
This project demonstrates **Setter Injection** using the Spring Framework XML configuration.

## Objective
- Understand Dependency Injection using Setter Injection.
- Configure Spring beans using `applicationContext.xml`.
- Inject `BookRepository` into `BookService`.
- Execute the application using Maven.

## Technologies Used
- Java
- Spring Core
- Maven
- VS Code

## Project Structure
```
LibraryManagement
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.library
│   │   │       ├── repository
│   │   │       │   └── BookRepository.java
│   │   │       ├── service
│   │   │       │   └── BookService.java
│   │   │       └── App.java
│   │   └── resources
│   │       └── applicationContext.xml
├── pom.xml
├── README.md
└── Output.png
```

## Expected Output
```
Setter Injection Successful
Bean Count: 2
bookRepository
bookService
Book Service is running...
Book Repository: Displaying book details...
BUILD SUCCESS
```

## Author
**Shankaragouda Patil**