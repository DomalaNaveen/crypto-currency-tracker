import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptoCurrencyTracker extends Component {
  render() {
    return (
      <div className="app-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptoCurrencyTracker
