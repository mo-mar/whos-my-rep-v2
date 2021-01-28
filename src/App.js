import { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import PostalCodeForm from './components/PostalCodeForm/PostalCodeForm'
import RepresentativesContainer from './components/RepresentativesContainer/RepresentativesContainer'
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
      try {
        setRepresentatives(res)
      } catch (e) {
        setError(e)
      }
    })
  }

  let representativesContainer = representatives.length ? (
    <RepresentativesContainer representatives={representatives} />
  ) : null

  let loadingSpinner = isLoading ? <span>loading...</span> : null

  return (
    <Layout>
      <PostalCodeForm
        handleSubmit={handleFormSubmit}
        setIsLoading={setIsLoading}
      />
      {representativesContainer}
      {error ? <p>{error}</p> : null}
      {loadingSpinner}
    </Layout>
  )
}

export default App
