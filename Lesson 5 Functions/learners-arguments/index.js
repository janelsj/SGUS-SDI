// Attempt to make "cc" argument an optional one.

function sendEmail(to, subject, content, cc) {
  console.log(to, cc, subject, content);
}

sendEmail("edison@skillsunion.com", "Testing123", "This is a test message"); // edison@skillsunion.com undefined Testing123 This is a test message
// sendEmail("edison@skillsunion" maps to parameter 1 ('to'), "Testing123" maps to parameter 2 ('subject'), "This is a test message" maps to parameter 3 ('content'))
// no argument entered for parameter 4 ('cc') --> therefore undefined.

function sendEmail(to, subject, content, cc="") {
  console.log(to, cc, subject, content);
}

sendEmail("edison@skillsunion.com", "Testing123", "This is a test message"); // edison@skillsunion.com undefined Testing123 This is a test message
