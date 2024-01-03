import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  clickOnMangoButton = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  clickOnBananaButton = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="fruits-container">
        <div className="card-container">
          <h1 className="heading">
            {' '}
            Bob ate <span className="count-text"> {mango} </span> mangoes{' '}
            <span className="count-text"> {banana} </span> bananas{' '}
          </h1>
          <div className="images-and-buttons-cards-container">
            <div className="image-and-button-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="image"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.clickOnMangoButton}
              >
                {' '}
                Eat Mango{' '}
              </button>
            </div>
            <div className="image-and-button-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.clickOnBananaButton}
              >
                {' '}
                Eat Banana{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
