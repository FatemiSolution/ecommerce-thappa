import React from 'react'

function FormatCurrency({
    currencySymbol = 'Rs.', 
    decimalPlaces = 1,
    number,
    
}) {
    const formattedNumber =(number.toFixed(decimalPlaces).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
  return (
    <span>
        {`${currencySymbol}${formattedNumber}`} 
    </span>
  )
}

export default FormatCurrency