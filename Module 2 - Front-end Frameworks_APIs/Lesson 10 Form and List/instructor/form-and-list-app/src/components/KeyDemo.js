import React from "react";

class KeyDemo extends React.Component {
  constructor() {
    super();

    this.state = {
      members: [
        {
          id: 1,
          firstName: "Edison",
          lastName: "Zhuang",
          nric: "123A",
          age: 35,
        },
        {
          id: 2,
          firstName: "Stanley",
          lastName: "Ong",
          nric: "456B",
          age: 18,
        },
        {
          id: 3,
          firstName: "Peter",
          lastName: "Chow",
          nric: "111C",
          age: 16,
        },
      ],
    };
  }

  render() {
    const MembersList = this.state.members.map((m) => {
      return (
        <li key={m.id}>
          {m.firstName} {m.lastName}, {m.age}
        </li>
      );
    });

    return <ul>{MembersList}</ul>;
  }
}

export default KeyDemo;
