import React from 'react'

const List = ({ data }) => {
  const { base, timestamp, rates } = data

  return (
    <table>
      <caption>{base}</caption>
      <caption>Timestamp: {timestamp}</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {
          rates.map(({ name, rate }) =>
            <tr key={name}>
              <td>{name}</td>
              <td>{rate}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export { List }
