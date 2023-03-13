// Write your code here
import {Component} from 'react'
import './index.css'

export default class RandomNumberGenerator extends Component() {
  state = {count: 0}

  getRandomNumber = () => {
    const num = Math.ceil(Math.random() * 99)
    this.setState({count: num})
    console.log(num)
  }

  render() {
      const {count}=this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.getRandomNumber}
          className="btn">
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}
