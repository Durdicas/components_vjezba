import { Component } from 'react'
import PropTypes from  'prop-types'


class KlasnaKomponenta extends Component{
    constructor(props) {
        super(props)
        //console.log(this)
    }
  render() {
    return (
        <>
            <h1>KlasnaKomponenta</h1>
            <p>Ovo je primjer komponente napravljene pomoću
                ključne riječi 'class'</p>
            <p>Ovo je primjer jednog propsa u klasnoj komponenti:</p>
            <h2>{this.props.title}</h2>
            <p>Ovo je primjer drugog propsa u klasnoj komponenti:</p>
            <h2>{this.props.broj}</h2>
        </>
      )
  }
}

KlasnaKomponenta.propTypes = {
    title: PropTypes.string,
    broj: PropTypes.number
  }


export default KlasnaKomponenta





/*const KlasnaKomponenta = (props) => {
    return (
        <>
            <h1>KlasnaKomponenta</h1>
            <h2>{props.title}</h2>
        </>
      )
  }
export default KlasnaKomponenta
*/

/*export function KlasnaKomponenta(props) {
    return (
        <>
            <h1>KlasnaKomponenta</h1>
            <h2>{props.title}</h2>
        </>
      )
  }
  */