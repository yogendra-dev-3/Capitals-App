import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = () => {
    const {capitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {capitalId} = this.state

    const country = this.getCountry(capitalId)

    return (
      <div className="capitals-container">
        <div className="card-container">
          <div className="card">
            <h1 className="heading">Countries and Capitals</h1>
            <div>
              <select onChange={this.onChangeOption} value={capitalId}>
                {countryAndCapitalsList.map(eachItem => (
                  <option key={eachItem.id} value={eachItem.id}>
                    {eachItem.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p>is is capital of which country?</p>
            </div>
            <h2>{country}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
