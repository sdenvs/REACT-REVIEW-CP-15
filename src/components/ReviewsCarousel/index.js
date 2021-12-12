// Write your code here
import './index.css'

const {Component} = require('react/cjs/react.development')

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    const {reviewsList} = this.props
    this.state = {count: 0, last: reviewsList.length - 1}
  }

  leftArrow = () => {
    const {count, last} = this.state
    if (count > 0) {
      this.setState(prevObj => ({count: prevObj.count - 1}))
    }
  }

  rightArrow = () => {
    const {count, last} = this.state
    if (count < last) {
      this.setState(prevObj => ({count: prevObj.count + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count, last} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">Reviews</h1>
        <div className="reviewCard card">
          <button onClick={this.leftArrow} className="button">
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <div className="information">
            <img src={reviewsList[count].imgUrl} />
            <h1 className="heading-2">{reviewsList[count].username}</h1>
            <p>{reviewsList[count].companyName}</p>
            <p>{reviewsList[count].description}</p>
          </div>
          <button onClick={this.rightArrow} className="button">
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
