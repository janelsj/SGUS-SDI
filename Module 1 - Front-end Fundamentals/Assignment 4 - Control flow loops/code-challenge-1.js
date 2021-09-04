/*
    Code Challenge 1.

    Background: 
    In a typical software development deployment, there are usually three types of environment. 
    1. The staging environment.
    2. The production environment.
    3. The disaster recover environemnt. 

    In staging environment, it is non crucial, only meant for User Acceptance Test (UAT). 
    Only the stakeholders of the product will use the system and give it a go or no-go to roll out 
    to the production environment.

    In production environment, it is important to have redundancy. With the modern cloud technology,
    we call it horizontal scaling. When we scale horizontally by deploying multiple instances of 
    applications, we are not afraid if one of them goes down, the other are still up serving any 
    incoming requests.

    In the disaster recovery environment, it is supposed to be deployed in another location and act
    as a temporary recovery environment when accident such as fire broke out at production environment.

    Code Challenge:
    Use a switch case to detect the current environment through the variable "env" and set the configuration
    variables accordingly based on your understanding of the above background writing.
     
*/

// Environment variable
const env = "STAGING"; // Possible values "PROD" and "DR"

// Configuration variables
// const horizontalScale = false;
// const multiZone = false;

// Write your switch case here.
switch (env) {
    case "STAGING":
        horizontalScale = "false";    
        multiZone = "false";
        break;
    case "PROD":
        horizontalScale = "true";
        multiZone = "false";
        break;
    case "DR":
        horizontalScale = "true";
        multiZone = "true";
        break;
    default:
        horizontalScale = " ";
        multiZone = " ";
};

console.log(`The environment ${env} is detected.`);
console.log(`This is the recommended configurations:`);
console.log(`Horizontal Scale: ${horizontalScale}`);
console.log(`Multiple Location (Multi-zone): ${multiZone}`);
