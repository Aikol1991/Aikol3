import react, { Component } from 'react'
import Number from './Number'

export default class MainPage extends Component {
constructor () {
    super()
    this.state = {number: 0}
}

render() {
    return (
        <div>
            <Number number={this.state.number}/>
            <button onClick={() => this.setState({number: this.state.number +1})}>Увеличить число</button>
        </div>
    )
}
} 