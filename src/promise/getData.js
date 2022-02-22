import data from '../data/data.json'
const { valid, rates, timestamp, base } = data

const getData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!valid) reject('Data is invalid')

      const parseRates = Object.entries(rates).map(([name, rate]) => ({
        name,
        rate
      }))

      resolve({
        rates: parseRates,
        base,
        timestamp
      })
    }, 2000)
  })

  return promise
}

export { getData }
