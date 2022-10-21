import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = currencyItem
  return (
    <div className="item-container">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={`currencyName${id}`} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
