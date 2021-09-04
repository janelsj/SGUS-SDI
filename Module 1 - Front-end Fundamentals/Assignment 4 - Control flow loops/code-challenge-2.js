/*
    Code Challenge 2.

    Write a grader assigner. Using both if and for condition to accomplish the following. 
    Use for loop to loop from 0 to 100. Use if condition to check against the grade range.
    You may need additional variables to ensure each subject is only printed once. There 
    should be a total of four sentences of grade report being printed on the console.

    Grade: Score
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

    Use console.log to print the grading report.
    
    Examples:
    - "You have scored A for the subject on mathematic."
    - "You have scored F for the subject on mother tongue."

*/

const mathematic = 99;
const english = 70;
const science = 81;
const motherTongue = 50;

// Add code here
const subjectGrade = [mathematic, english, science, motherTongue];
const subject = ["Mathematics", "English", "Science", "Mother Tongue"];

for (let i = 0; i < subjectGrade.length; i++) {
    if (subjectGrade[i] < 60) {
        console.log(`You have scored F for ${subject[i]}.`);
    } else if (subjectGrade[i] < 70) {
        console.log(`You have scored D for ${subject[i]}.`);
    } else if (subjectGrade[i] < 80) {
        console.log(`You have scored C for ${subject[i]}.`);
    } else if (subjectGrade[i] < 90) {
        console.log(`You have scored B for ${subject[i]}.`);
    } else {
        console.log(`You have scored A for ${subject[i]}.`);
    }
}
