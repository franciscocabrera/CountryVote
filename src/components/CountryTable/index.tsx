import 'CountryTable.css'
import React from 'react'

const CountryTable: React.FC = () => {
  return (
    <div className="CountryTable">
      <a className="title">Top 10 Most Voted Countries</a>
      <div className="search"></div>
      <div className="table"></div>
    </div>
  )
}

export default CountryTable