# Prerequisites
You need to have the following installed in your machine:
- Java 8
- Maven 3

# Instructions
In order to build from source you have to clone this repository and execute:

    $ mvn clean package
    $ java -jar movierama-server/target/movierama-server-0.0.1-alpha.jar

# Information

The application is using Spring Boot for the backend and Angular 7 for the UI.
H2 in memory database is used for more easier execution. Shutting down the application will result in loss of data.

