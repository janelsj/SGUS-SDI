import { useState } from "react";

function FormInput() {
  const [member, setMember] = useState({
      firstName: null,
      lastName:null,
      age:null
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const data = {...member};

    switch(fieldName){
        case "first-name":
            data.firstName = e.target.value;
            break;
        case "last-name":
            data.lastName = e.target.value;
            break;
        case "age":
            data.age = e.target.value;
    }

    setMember(data);
  };

  return (
    <form>
      <input type="text" placeholder="First Name" name="first-name" onChange={handleInput} />
      <input type="text" placeholder="Last Name" name="last-name" onChange={handleInput} />
      <input type="number" placeholder="Age (number only)" name="age" onChange={handleInput} />
      Output: {member.firstName} {member.lastName} {member.age}
    </form>
  );
}

export default FormInput;