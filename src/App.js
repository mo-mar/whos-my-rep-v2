import { useState, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import PostalCodeForm from './components/PostalCodeForm/PostalCodeForm'
import RepresentativesContainer from './components/RepresentativesContainer/RepresentativesContainer'
import { getRepresentatives } from './Utils/APIRequests'
import Loader from 'react-loader-spinner'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  const [representatives, setRepresentatives] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (representatives.length || error) {
      setIsLoading(false)
    }
  }, [representatives, error])

  const handleFormSubmit = (e, postalCode) => {
    e.preventDefault()
    setIsLoading(true)

    getRepresentatives(postalCode).then(res => {
      if (res.length) {
        setRepresentatives(res)
      } else {
        alert(res)
        setError('Request failed. Please try again later.')
      }
    })
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
      <Switch>
        <Route exact path="/">
          <Layout reps={representatives}>
            <PostalCodeForm
              handleSubmit={handleFormSubmit}
              setIsLoading={setIsLoading}
            />
            {representativesContainer}
            {error ? <p>{error}</p> : null}
            {loadingSpinner}
          </Layout>
        </Route>
        <Route path="/about">
          <Layout>
            <About />
          </Layout>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
