# child-voice
<< Please enter the title of your idea >>
<< Please enter the description about your idea >>
<< Please enter your team details below >>

Child Voice is a Non-Governmental organization, registered uner india Trust Act on 15 June 2011 in Dindigul, TamilNadu, India
#Environment Setup
Child-Voice is built on Spring Boot which makes it very easy to setup and build Java/spring based applications. All we need is JDK (Oracle JDK 8) and Maven (v 3.3). Child-Voice uses MySQL (version 5.6) for database.

 * JDK can be downloaded from [Oracle download site](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
 * Maven can be downloaded from [Maven site](https://maven.apache.org/download.html)
 * For MySQL - Mac users can use MAMP and Windows users can download WAMP or XAMPP - these packages will provide few more useful tools.
   * MAPM for Mac can be downloaded from [here](https://www.mamp.info/en/downloads/) 
   * WAMP for Window can be downloaded from [here](http://www.wampserver.com/en/#download-wrapper) 

#Database setup
Verify that you are able to connect to mysql - Enter the password when prompted
 >> $ mysql -uroot -p

All the commands below use implicit host (127.0.0.1) and port (8889 for Mac, 3306 for Windows).
If you want to login to a specific host and port please use the following style to login to mysql
 >> $ mysql -h127.0.0.1 -P 8889 -uroot -p

Load the schema into mysql
  >> mysql -user -xxxx -Dpmp < src/main/resources/schema.sql

#Build using maven
 >>  mvn clean package (-DskipTests to skip tests)

#To run Child Voice locally


#Access the site


#To deploy war file to an existing tomcat installation

#Troubleshooting


### Problem in running build (mvn clean package) 
Sometimes you may face errors while doing the build, please ensure the ports are not blocked by any other processes. Also you can use the skip tests option in mvn command by appending -DskipTest (mvn clean package -DskipTests)

# Setting up Child-Voice on Server machine (Amazon Linux/RHEL/CentOS)
##Install Java

```
  $ wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u60-b27/jdk-8u60-linux-x64.rpm"
  $ sudo yum localinstall jdk-8u60-linux-x64.rpm 
  $ java -version
  $ export $JAVA_HOME=/usr/java/jdk1.8.0_60
```
##Install Maven
```
  $ wget http://www.eu.apache.org/dist/maven/maven-3/3.3.3/binaries/apache-maven-3.3.3-bin.tar.gz
  $ unzip apache-maven-3.3.3-bin.tar.gz 
  $ tar -xvzf apache-maven-3.3.3-bin.tar.gz 
  $ sudo mv apache-maven-3.3.3 /opt/maven
  $ sudo ln -s /opt/maven/bin/mvn /usr/bin/mvn
```

##Install tomcat7
```
  $ sudo yum install tomcat7
  $ sudo /etc/init.d/tomcat7 start 
```
  (Webapp folder will be /usr/share/tomcat7/webapps; config folder /etc/tomcat7/conf

##Install and configure Git
```
  $ sudo yum install git
  $ git config --global user.name "User Name"
  $ git config --global user.email user.email@email.com
```
  
##Checkout code and build
  * $ git clone https://github.com/PayPal-Opportunity-Hack-Chennai-2016/child-voice child-voice-ngo
  * Update application properties to point to mysql database 
  * $ mvn clean package
  
##Deploy
  *  Copy childVoice.war from target folder to tomcat webapp folder
  *  Access with application at https://hostname.org:8443/childVoice

#Child Voice host - Regular Deployment process to be followed 

##Goto the deploy working directory
```
  $ cd /childVoice/child-voice/
  $ sudo su
```
  
##Get the latest from Git
```
  $ git pull
```
  
##Maven build command
```
  $ mvn clean package -DskipTests
```

##Stop the tomcat server
```
  $ /etc/init.d/tomcat7 stop
  $ /etc/init.d/tomcat7 status
```

##Backup existing war and copy new war file to tomcat webapps folder 
```
  $ mv /usr/share/tomcat7/webapps/childVoice.war /tmp/childVoice.war.DDMMYYYY
  $ cp target/childVoice.war /usr/share/tomcat7/webapps
```

##Start the tomcat server
```
  $ /etc/init.d/tomcat7 status
```
  
##Validate server up and changes applied 
* URL should be accessible - https://xxxxxxxxx:8443/childVoice and if possible, validate new changes are applied
