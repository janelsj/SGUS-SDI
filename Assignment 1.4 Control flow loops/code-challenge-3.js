/*
    Code Challenge 3.

    Background:
    A typical SDLC (software development life cycle) has stages and each stage has a dedicated duration given to it. 
    Let's use the following (non realistic) examples for the 6 SDLC stages and the duration required specified in # of week.

    SOFTWARE DEVELOPMENT SCHEDULE
    -----------------------------
    1. Requirement Analysis (4 week) // 4 weeks
    2. Design (2 weeks)              // 6 weeks
    3. Development (12 weeks)        // 18 weeks
    4. Testing (4 weeks)             // 22 weeks
    5. Release (1 week)              // 23 weeks
    6. Maintenance (52 weeks)        // 75 weeks

    TASK: You are to console.log whether the project is on track by comparing the variable "currentSDLCStage" against "durationPassed".
    
    EXAMPLES:
    - If 5 weeks have passed and the current SDLC stage is 1, we are 1 stage late.
    - If 21 weeks have passed and the current SDLC stage is 2, we are 2 stages late.
    - If 15 weeks have passed and the current SDLC stage is 3, we are on track.
    - if 6 weeks have passed and the current SDLC stage is 3, we are ahead of time.

    Your message should be comprehensive. Try to include the following information:
    - How many weeks have passed?
    - Which stage are we in today?
    - Are we late, on track or ahead of time?
    - How many stage are we ahead or late?

    You require more variables than what are already declared.
    Hint: Use arrays and arithmetic operators too!
*/

const currentSDLCStage = 1; // Let a numeric value represent the stage of SDLC
const durationPassed = 5; // Let a numeric value represent the number of weeks passed

// Add code here

console.log(`${durationPassed} weeks have passed.`);
console.log(`We are in stage ${currentSDLCStage} today.`);

function stageRange(start, end) {
    const stageArray = [];
    for (let i = start; i <= end; i++) {
        stageArray.push(i);
    };
    return stageArray;
}

const stage1 = stageRange(0,4);
const stage2 = stageRange(5,6);
const stage3 = stageRange(7,18);
const stage4 = stageRange(19,22);
const stage5 = stageRange(23,23);
const stage6 = stageRange(24,75);

const stages = [stage1, stage2, stage3, stage4, stage5, stage6];
const intendedStageWithDurationPassed = stages.findIndex(arr => arr.includes(durationPassed)) + 1;

if (currentSDLCStage > intendedStageWithDurationPassed) {
    console.log(`We are ${currentSDLCStage - intendedStageWithDurationPassed} stage(s) ahead of time.`);
} else if (currentSDLCStage < intendedStageWithDurationPassed) {
    console.log(`We are ${intendedStageWithDurationPassed - currentSDLCStage} stage(s) late.`);
} else {
    console.log("We are on track.");
}