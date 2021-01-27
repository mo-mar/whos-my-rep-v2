import { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import PostalCodeForm from './components/PostalCodeForm/PostalCodeForm'
import Representatives from './components/Representatives/Representatives'
import { getRepresentatives } from './Utils/APIRequests'

function App() {
  const [representatives, setRepresentatives] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    if (representatives.length) {
      setIsLoading(false)
    }
  }, [representatives])

  const handleFormSubmit = (e, postalCode) => {
    e.preventDefault()
    setIsLoading(true)

    getRepresentatives(postalCode).then(res => {
      if (res.length) {
        setRepresentatives(res)
      } else {
        setError(res)
      }
    })
  }

  let repList = representatives.length ? (
    <Representatives representatives={representatives} />
  ) : null

  let loadingSpinner = isLoading ? <span>loading...</span> : null

  return (
    <Layout>
      <PostalCodeForm
        handleSubmit={handleFormSubmit}
        setRepresentatives={setRepresentatives}
        setIsLoading={setIsLoading}
      />
      {repList}
      {error ? <p>{error}</p> : null}
      {loadingSpinner}
    </Layout>
  )
}

export default App
