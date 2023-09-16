import { Component } from 'react'

class UserClass extends Component {
  render() {
    const { name, years } = this.props
    return (
    <>
      <h1>UserClass</h1>
      <p>Pozdrav, moje ime je {name} i imam {years} godina</p>
    </>
    )
  }
}
export default UserClass
