import React, { Component } from "react";

export default class Post extends Component {
  state = {
    username: "",
    email: "",
    age: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      username: this.state.username,
      email: this.state.email,
      age: this.state.age
    };
    console.log(JSON.stringify(post));
    
    fetch("http://107.20.65.213:80/users", {
      method: "POST",
        headers: {
          "content-Type": "application/json"
        },
      body: JSON.stringify(post)
    })
      // .then(res => res.json)
      // .then(data => console.log(data));
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
  }).then(function(data) {
      console.log(data)    
      if(data === "success"){
         this.setState({msg: "Thanks for registering"});  
      }
  }).catch(function(err) {
      console.log(err)
  });
  };


  render() {
    return (
      <div>
        <h1>Post data</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username:</label> <br />
            <input
              type="text"
              name="username"
              onChange={this.onChange}
              value={this.state.username}
            />
          </div>
          <br />
          <div>
            <label>Email:</label> <br />
            <input
              type="text"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <br />
          <div>
            <label>Age:</label> <br />
            <input
              type="text"
              name="age"
              onChange={this.onChange}
              value={this.state.age}
            />
          </div>{" "}
          <br />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}
