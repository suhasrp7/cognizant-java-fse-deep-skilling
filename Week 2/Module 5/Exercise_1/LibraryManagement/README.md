# Exercise 1 - Library Management

## Objective
To understand the basics of the Spring Core Framework by implementing Dependency Injection (DI) and Inversion of Control (IoC) using XML configuration.

## Technologies Used
- Java
- Spring Core
- Maven
- XML Configuration
- VS Code

## Project Structure
```
Exercise_1_LibraryManagement
│── src
│   ├── main
│   │   ├── java
│   │   │   └── com.library
│   │   │       ├── repository
│   │   │       ├── service
│   │   │       └── App.java
│   │   └── resources
│   │       └── applicationContext.xml
│── pom.xml
│── Output.png
│── README.md
```

## Features
- Demonstrates Spring Dependency Injection.
- Uses XML-based Spring configuration.
- Injects Repository into Service using IoC Container.
- Executes the application using Maven.

## How to Run

1. Open the project in VS Code.
2. Open the terminal.
3. Navigate to the project directory.
4. Run the following command:

```bash
mvn exec:java -Dexec.mainClass="com.library.App"
```

## Expected Output

```
Book Service is running...
Book Repository: Displaying book details...
BUILD SUCCESS
```

## Output Screenshot

The output screenshot is available in **Output.png**.

## Author

**Shankaragouda Patil**