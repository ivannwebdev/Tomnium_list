import { useEffect, useState } from 'react'
import './App.css'
import { getData } from './promise/getData'
import { List } from './components/List'
import { Preloader } from './components/Preloader'
import { Error } from './components/Error'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
      .then(data => setData(data))
      .catch(error => setError(error))
  }, [])

  if (error) return <Error error={error} />

  if (!data) return <Preloader />

  return <List data={data} />
}

export { App }
