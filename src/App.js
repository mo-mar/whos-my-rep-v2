import { useState } from 'react'
import Layout from './components/Layout/Layout'
import PostalCodeForm from './components/PostalCodeForm/PostalCodeForm'
import RepresentativesList from './components/RepresentativesList/RepresentativesList'

function App() {
  const [representatives, setRepresentatives] = useState([])

  return (
    <Layout>
      <PostalCodeForm setRepresentatives={setRepresentatives} />
      {representatives ? (
        <RepresentativesList representativeData={representatives} />
      ) : null}
    </Layout>
  )
}

export default App
