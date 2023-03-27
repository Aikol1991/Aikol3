import react, { Component } from 'react'

export default class Number extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>{this.props.number}</h1>  
        )
    }
}