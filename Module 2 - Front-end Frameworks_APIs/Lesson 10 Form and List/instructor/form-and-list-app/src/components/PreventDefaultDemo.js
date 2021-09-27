import { useState } from "react";

function PreventDefaultDemo() {
  const [firstName, setFirstName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(firstName);
  };

  return (
    <form action="https://www.skillsunion.com" method="get" onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}}/>
      Output: {firstName}
      <br />
      <button>Submit</button>
    </form>
  );
}

export default PreventDefaultDemo;
