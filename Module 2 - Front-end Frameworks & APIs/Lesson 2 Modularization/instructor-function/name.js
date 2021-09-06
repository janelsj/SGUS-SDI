// module.exports.getName = function (){
//     return "Johnson Loh";
// }



const person = {
    firstName:"Johnsoh",
    lastName: "Loh"
};

module.exports.getPerson = function(){

    const me = {...person};
    me.name = person.firstName + " " + person.lastName;
    me.age = 39;

    return me;
}