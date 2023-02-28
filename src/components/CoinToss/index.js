// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {totalCount, headsCount, tailsCount} = this.state
    if (tossResult === 0) {
      this.setState({
        totalCount: totalCount + 1,
        headsCount: headsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState({
        totalCount: totalCount + 1,
        tailsCount: tailsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, imageUrl} = this.state

    return (
      <div className="bg-container">
        <div className="card1">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="card-para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-image" />
          <button className="toss-button" type="button" onClick={this.tossCoin}>
            Toss coin
          </button>
          <div className="results-container">
            <p className="result">Total:{totalCount}</p>
            <p className="result">Heads:{headsCount}</p>
            <p className="result">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
