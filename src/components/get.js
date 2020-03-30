import React, { Component } from 'react'

export default class Gett extends Component {
state = {
    getdata: []
}



componentWillMount(){
    fetch('http://107.20.65.213:80/users')
    .then(res => res.json())
    .then(data => this.setState({getdata: data}));
    
}

    render() {
        const getItems = this.state.getdata.map(item => (
<div key={item.id}>
        <h3>{item.username}</h3>
        <p>{item.email}</p>
        <p>{item.age}</p>   
</div>
        ));
        return (
            <div>
                <h1>Data</h1>
                {getItems}
            </div>
        )
    }
}
