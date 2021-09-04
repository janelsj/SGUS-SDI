const fullName = document.getElementById("name");
const dob = document.getElementById("dob");
const ic = document.getElementById("ic");
const race = document.getElementById("race");
const sex = document.getElementById("sex");
const country = document.getElementById("country");
const submit = document.getElementById("submit");

window.onload = fullName.focus();

//Creation of dropdown lists for race, sex, country of birth:
const raceArray = ["Chinese", "Malay", "Indian", "Others"];
const sexArray = ["Male", "Female"];
const countryArray = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo (DRC)", "Cook Islands", "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", 
"Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "St Helena", "St Kitts & Nevis", "St Lucia", "St Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Tobago", "Togo", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "U.S. Virgin Islands", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

function selection(id, arrayList) {
    let option = document.createElement("option");
    option.value = "";
    option.text = "Please select";
    id.append(option);
    arrayList.forEach((item) => {
        option = document.createElement("option");
        option.value = item;
        option.text = item;
        id.append(option);
    })
}

selection(race, raceArray);
selection(sex, sexArray);
selection(country, countryArray);

//Get values of selected items for dropdown lists (race, sex, country of birth):
function getValue(list) {
    return list.options[list.selectedIndex].value;
}

function raceValue() {
    if (getValue(race) === "Others") {
        return `${getValue(race)} (${document.getElementById("otherRace").value})`;
    } else {
        return getValue(race);
    }
}

//Events change according to Race(Other) selection:
function otherRaceInput(){
    let newInput = document.createElement("input");
    if (getValue(race) === "Others") {
        newInput.type = "text";
        newInput.id = "otherRace";
        race.parentNode.insertBefore(newInput, race.nextSibling);
    } else if (getValue(race) !== "Others" && race.nextSibling.id === "otherRace") {
        race.parentNode.removeChild(race.nextSibling);
    }
}

race.addEventListener("change", otherRaceInput);

/* Function to set/reset the focus back to the first remaining empty input field of the form, 
   after window alert is clicked away: */
function emptyFieldFocus() {
    const fields = [fullName, dob, ic, race, sex, country];
    const emptyField = fields.find((field) => {if (field.value==="") {return field;}});
    if (!document.getElementById("otherRace") || document.getElementById("otherRace").value !== "") {
        emptyField.focus();
    } else if (document.getElementById("otherRace").value==="") {
         if (emptyField === fullName || emptyField === dob || emptyField === ic) {
            emptyField.focus();
        } else {
            document.getElementById("otherRace").focus();
        }
    }
}

//Function for submit button onclick event:
function submitFunction(event) {
    event.preventDefault();
    const values = [fullName.value, dob.value, ic.value, getValue(race), getValue(sex), getValue(country)];
    if ((!values.includes("") && !document.getElementById("otherRace")) || 
        (!values.includes("") && document.getElementById("otherRace").value.length !== 0)) {
        validateName();
        validateDob();
        validateNricNum();
/*  These 3 fields above will have already been validated if the user navigates with only the 'tab' key.
    But if the user chooses to click the "submit" button instead of "tab", only 1 of these 3 fields 
    can be invalid at any one time with the respective "onblur" event listeners.*/        
        alert(`Thank you for submitting your details:
        ${document.querySelector('[for="fullName"]').innerHTML} ${fullName.value}
        ${document.querySelector('[for="dob"]').innerHTML} ${dob.value}
        ${document.querySelector('[for="nricNo"]').innerHTML} ${ic.value}
        ${document.querySelector('[for="race"]').innerHTML} ${raceValue()}
        ${document.querySelector('[for="sex"]').innerHTML} ${getValue(sex)}
        ${document.querySelector('[for="country"]').innerHTML} ${getValue(country)}`);
    } else if (values.includes("") || document.getElementById("otherRace").value.length === 0) {      
        alert ('Please complete all the fields in the form.');
        emptyFieldFocus();
    }
    submit.blur();
}

//Challenge 1: Form validation for input fields (fullName, DOB, NRIC No.):
/*________ (Input fields for race, gender, country of birth  _____________
  _____ changed to selection dropdown list format for validation) ________*/

    //Full name Validation:
    function validateName(){
        const nameRegex = /^([a-zA-Z-\'\s,]+) ([a-zA-Z-\']+?)$/;
        if (!nameRegex.test(fullName.value) && fullName.value !== "") {
            window.alert("Please check that your full name has been entered.");
            setTimeout(() => {fullName.focus()}, 1);
        }
    }

    fullName.addEventListener("blur", validateName);

    // DOB Validation:
    function validateDob() {
        let dobInput = new Date(dob.value);
        const today = new Date();
        if(dobInput.getFullYear() < 1901 || dobInput > today) {
            window.alert("Invalid date of birth entered. Please check your details.");
            setTimeout(() => {dob.focus()}, 1);
        }
    }

    dob.addEventListener("blur", validateDob);

    //NRIC Number Validation:
    function validateNricNum() {
        const nricNoRegex = /^([f-gF-GMms-tS-T]{1})(\d{7})([a-zA-Z]{1})$/;
        if(!nricNoRegex.test(ic.value) && ic.value !== "") {
            window.alert("Invalid NRIC number entered. Please check your details.");
            setTimeout(() => {ic.focus()}, 1);
        }
    }

    ic.addEventListener("blur", validateNricNum);


//Challenge 3: Toggle tabIndex through form fields
const nodeList = document.querySelector(".form").childNodes;
for (let i=0; i<nodeList.length; i++) {
    nodeList[i].addEventListener("keyup", function(e){
        if (e.keyCode===9) {
            e.preventDefault();
            nodeList[i].tabIndex = 0;
            nodeList[i-1].tabIndex = -1;
        };
    })
}