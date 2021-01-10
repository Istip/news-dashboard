import React, { Component } from "react"
import styled from "styled-components"
import ee from "event-emitter"

// CREATING THE STYLE OF THE NOTIFICATION USING STYLED COMPONENTS
const Container = styled.div`
  background-color: #${(props) => props.color};
  color: #fff;
  padding: 1rem 2rem;
  position: fixed;
  opacity: ${(props) => props.opacity};
  bottom: 1rem;
  right: 1rem;
  z-index: 100;

  &:hover {
    cursor: pointer;
  }
`

// THIRD PARTY EVENT EMITTER
const emitter = new ee()

// EXPORTING FUNCTION NAMED: notify
// THIS CAN BE USED UNIVERSALLY IN EVERY COMPONENT AFTER A { notify } IMPORT
// IT TAKES TWO ARGUMENTS: THE MESSAGE AND THE BACKGROUND COLOR
export const notify = (msg, color) => {
  emitter.emit("notification", msg, color)
}

// THIS TIME I HADE TO USE CLASS BASED COMPONENT
class Notification extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opacity: 0,
      msg: "",
      color: "#4BB511",
    }

    this.timeout = null

    // CREATING AN EMITTER FOR THE ONSHOW FUNCTION
    emitter.on("notification", (msg, color) => {
      this.onShow(msg, color)
    })
  }

  // IF THERE IS ALREADY A NOTIFICATION CREATED IN THE BOTTOM LEFT SIDE OF THE WEBSITE, THEN IT GETS REMOVED FAST (250MS), AND REPLACED WITH THE NEW ONE
  // IF THERE IS NO NOTIFICATION THEN ONE GETS CREATED
  onShow = (msg, color) => {
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.setState({ opacity: 0 }, () => {
        this.timeout = setTimeout(() => {
          this.showNotification(msg, color)
        }, 250)
      })
    } else {
      this.showNotification(msg, color)
    }
  }

  // THIS NOTIFICATION MAKES THE STATE OPACITY 1, SO WE CAN SEE NOW
  // BASED ON THE GIVEN ARGUMENTS MSG AND COLOR STATE VALUES GET REPLACED, SO WE SEE WHAT WE DECIDE IN THE NOTIFY FUNCTION
  showNotification = (msg, color) => {
    this.setState(
      {
        opacity: 1,
        msg,
        color,
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState({ opacity: 0 })
        }, 2500)
      }
    )
  }

  render() {
    return (
      <Container opacity={this.state.opacity} color={this.state.color}>
        {this.state.msg}
      </Container>
    )
  }
}

export default Notification
