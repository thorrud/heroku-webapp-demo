# Deploy a Java Web Application that launches with Jetty Runner

## Prerequisites

* Basic Java knowledge, including an installed version of the JVM and Maven.
* Basic Git knowledge, including an installed version of Git.

### What is Jetty and Jetty Runner?
Jetty is a lightweight Java application server that offers a flexible array of options for how it can be launched. One popular option is using embedded Jetty the way that the [java quickstart](http://devcenter.heroku.com/java) does. Another good option is the Jetty Runner jar file. Each version of Jetty that is released includes a Jetty Runner jar. This jar can be run directly from the java command and can be passed a war file to load right on the command line. An example of this would be:

    :::term
    $ java -jar jetty-runner.jar application.war

Jetty Runner will then launch a Jetty instance with the given war deployed to it.

## Run your Application

To build your application simply run:

    :::term
    $ mvn package

And then run your app using the java command:

    :::term
    $ java -jar target/dependency/jetty-runner.jar target/*.war

That's it. Your application should start up on port 8080.

# Deploy your Application to Heroku

## The Procfile

You declare how you want your application executed in `Procfile` in the project root. We want to run the war under target using the jetty-runner

    :::term
    web:    java $JAVA_OPTS -jar target/dependency/jetty-runner.jar --port $PORT target/*.war

## Deploy to Heroku

Create the app on the Cedar stack:

    :::term
    $ heroku create --stack cedar
    Creating high-lightning-129... done, stack is cedar
    http://high-lightning-129.herokuapp.com/ | git@heroku.com:high-lightning-129.git
    Git remote heroku added

Deploy your code:

    :::term
    git push heroku master

Congratulations! Your web app should now be up and running on Heroku. Open it in your browser with:

    :::term  
    $ heroku open
