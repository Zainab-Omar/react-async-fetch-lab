import React from 'react'

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            names: []
        }
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => {
            this.setState({
                names: json.people
            })
        })
    }
    render(){
        return(
            <div>
                <h1>People on Space</h1>
                <ul>{this.state.names.map(name => <li>{name.name}</li>)}</ul>
                
            </div>
        )
    }
}
