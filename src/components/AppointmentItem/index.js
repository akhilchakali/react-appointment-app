// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {details, clicked} = props
  const {id, reason, date, isStar} = details
  const starred = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const starClicked = () => {
    clicked(id)
  }
  return (
    <li className="list-item">
      <div className="star-div">
        <p>{reason}</p>
        <button type="button" onClick={starClicked} data-testid="star">
          <img className="img" alt="star" src={starred} />
        </button>
      </div>
      <p>{date}</p>
    </li>
  )
}
export default AppointmentItem
