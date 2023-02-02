// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    appList: [],
    inputValue: '',
    dateValue: '',
  }

  addToList = () => {
    const {inputValue, dateValue} = this.state
    const a = {
      id: uuidv4(),
      reason: inputValue,
      date: dateValue,
      isStar: false,
    }
    this.setState(prevState => ({
      appList: [...prevState.appList, a],
      inputValue: '',
      dateValue: '',
    }))
  }

  changeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  changeDate = event => {
    this.setState({dateValue: event.target.value})
  }

  clicked = id => {
    this.setState(prevState => ({
      appList: prevState.appList.map(each => {
        if (each.id === id) {
          return {...each, isStar: !each.isStar}
        }
        return each
      }),
    }))
  }

  filtered = () => {
    this.setState(prevState => ({
      appList: prevState.appList.filter(each => each.isStar === true),
    }))
  }

  render() {
    const {appList, inputValue, dateValue} = this.state
    return (
      <div className="main">
        <div className="tot">
          <div className="inner">
            <div>
              <h1>Add Appointment</h1>
              <label htmlFor="in">Title</label>
              <input id="in" value={inputValue} onChange={this.changeInput} />
              <label htmlFor="da">Date</label>
              <input
                id="da"
                type="date"
                value={dateValue}
                onChange={this.changeDate}
              />
              <br />
              <button type="button" onClick={this.addToList}>
                Add
              </button>
            </div>
            <img
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
            />
          </div>
          <hr />
          <div className="app">
            <h1>Appointments</h1>
            <button type="button" className="stared" onClick={this.filtered}>
              starred
            </button>
          </div>
          <ul className="list">
            {appList.map(each => (
              <AppointmentItem
                key={each.id}
                details={each}
                clicked={this.clicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
