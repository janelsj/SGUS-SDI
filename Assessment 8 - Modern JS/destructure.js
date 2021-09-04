/*
    Task: Destructure objects and rename it.

    Consider the object `project`, there are properties name that are ambiguous to read. Destructure the project properties into the following:    
    - pNo -> projectNo
    - uatDate - userAcceptanceTestDate
    - sitDate - systemIntegrationTestDate
    - pmName - projectManager

    Quick Ref: https://wesbos.com/destructuring-renaming
*/

const project = {
    title:"Access Control System",
    pNo:"WET 2020-1",
    uatDate: "01-09-2020",
    sitDate: "01-03-2020",
    deploymentDate:"01-12-2020",
    pmName:"John Andersen",    
}

// Add code here
const {title,
    pNo: projectNo, 
    uatDate: userAcceptanceTestDate, 
    sitDate: systemIntegrationTestDate,
    deploymentDate,
    pmName: projectManager} = project;

console.log(title, projectNo, userAcceptanceTestDate, systemIntegrationTestDate, deploymentDate, projectManager);