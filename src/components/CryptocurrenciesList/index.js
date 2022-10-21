import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {CurrencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const UpdatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({CurrencyList: UpdatedData, isLoading: false})
  }

  render() {
    const {CurrencyList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="tracker-container">
            <h1 className="heading">CryptoCurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
              alt="cryptocurrency"
            />
            <div className="headings-container">
              <div>
                <p className="coin-type ">Coin Type</p>
              </div>
              <div>
                <p className="coin-type">USD</p>
                <p className="coin-type">EURO</p>
              </div>
            </div>
            <div>
              <div>
                {CurrencyList.map(each => (
                  <CryptocurrencyItem key={each.id} currencyItem={each} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
