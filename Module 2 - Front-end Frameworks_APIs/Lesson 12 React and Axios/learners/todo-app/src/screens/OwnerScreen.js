import React from "react";
import API from '../API';

class TodoScreen extends React.Component {

  state = {
    status: null,
    owner: {name: ""},
    owners: [],
  }

  componentDidMount() {
    this.fetchOwners();
  }

  async fetchOwners(){
    const response = await API.get('/owner');
    const {status, data} = response;
    if (status === 200) {
        this.setState({status, owners: data});
    } else {
      this.setState({status});
    }
  };

  handleChange = (e) => {
    this.setState({owner: {name: e.target.value}});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { status } = await API.post("/owner", this.state.owner);
    if (status === 200) {
      this.fetchOwners();
    }
  }

  render() {
    const { status, owners } = this.state;
    return (
      <>
        <form onSubmit = {this.handleSubmit}>
          <fieldset>
          <legend>Add Owner</legend>
          <input type = "text" placeholder="Enter owner name here" required autoFocus onChange={this.handleChange}/>
          <button>Submit</button>
          </fieldset>
        </form>
        <h2>Owners List</h2>
        {!status ? "Page is loading..." 
        : <>
          {status === 200 ? <ul>{owners.map(item => <li key={item.id}>{item.name}</li>)}</ul> : "Error"}
        </>}
      </>
    );
  }
}

export default TodoScreen;
