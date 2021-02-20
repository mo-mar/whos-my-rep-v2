import { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import PostalCodeForm from './components/PostalCodeForm/PostalCodeForm'
import RepresentativesContainer from './components/RepresentativesContainer/RepresentativesContainer'
import { getRepresentatives } from './Utils/APIRequests'
import Loader from 'react-loader-spinner'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [representatives, setRepresentatives] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (representatives.length || error) {
      setIsLoading(false)
    }
  }, [representatives, error])

  const handleFormSubmit = async (e, postalCode) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let reps = await getRepresentatives(postalCode)
      if (reps.length) {
        setRepresentatives(reps)
      }
    } catch (e) {
      alert(e)
      setError('Request failed. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  let representativesContainer =
    !isLoading && representatives.length ? (
      <RepresentativesContainer representatives={representatives} />
    ) : null

  let loadingSpinner = isLoading ? (
    <Loader type="Bars" color="#00BFFF" height={60} width={60} />
  ) : null

  return (
    <Router>
      <Route exact path="/">
        <Layout reps={representatives}>
          {isLoading ? (
            loadingSpinner
          ) : (
            <PostalCodeForm
              handleSubmit={handleFormSubmit}
              setIsLoading={setIsLoading}
            />
          )}
          {representativesContainer}
          {error ? <p>{error}</p> : null}
        </Layout>
      </Route>
      <Route path="/about">
        <Layout>
          <About />
        </Layout>
      </Route>
    </Router>
  )
}

export default App
