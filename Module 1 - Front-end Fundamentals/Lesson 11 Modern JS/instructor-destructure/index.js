// Destructure object

const largeInformation = {
    name:"John Doe",
    identityNo:"****123A",
    gender:"M",
    isMember:true,
    emergencyContact:"+65 9123 4567",
    mobile:"+65 8765 4321",
    email:"johndoe@mail.com"
}

const {name, email, mobile, ...others} = largeInformation;

console.log(name, email, mobile);
console.log('others', others);


// Destructure array

const serialData = ["04", "D2", "05", "E2", "11", "11"];

const [first, second, ...remaining] = serialData;

console.log(first, second);
console.log('remaining', remaining);