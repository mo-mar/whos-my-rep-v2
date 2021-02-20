import styled from 'styled-components'
import fallBackImage from '../../Images/blank-profile-pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect, useRef } from 'react'

const StyledRepresentative = styled.li`
  border: 1px solid black;
  padding: 0.8rem;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`

const StyledContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  svg {
    margin-right: 8px;
  }
`

const RepImageContainer = styled.div`
  width: 70%;
  margin-top: 0.8rem;
  img {
    width: 100%;
    border-radius: 10%;
  }
  @media (min-width: 600px) {
    width: 50%;
  }
`

export default function Representative({ repData }) {
  const [imageError, setImageError] = useState(false)
  const [shouldUseFallBackImage, setShouldUseFallBackImage] = useState(false)
  const imageRef = useRef()

  useEffect(() => {
    if (imageError) {
      setShouldUseFallBackImage(true)
      setImageError(false)
    }
  }, [imageError])

  useEffect(() => {
    let timeout = setTimeout(() => {
      checkForBrokenImage()
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const checkForBrokenImage = () => {
    let image = imageRef.current
    if (image && !image.height) {
      setShouldUseFallBackImage(true)
      setImageError(false)
    }
  }

  return (
    <StyledRepresentative>
      <RepImageContainer>
        <img
          onError={() => setImageError(true)}
          ref={imageRef}
          src={
            shouldUseFallBackImage || !repData.photo_url
              ? fallBackImage
              : repData.photo_url
          }
          alt={`${repData.name}`}
        />
      </RepImageContainer>
      <h2>{repData.name}</h2>
      <h3>
        {repData.elected_office} for {repData.district_name}
      </h3>
      <div>{repData.representative_set_name}</div>
      {repData.party_name ? <div>{repData.party_name}</div> : null}
      {repData.email ? (
        <StyledContactContainer>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{repData.email}</span>
        </StyledContactContainer>
      ) : null}
      <div>
        <a href={repData.source_url}>Source</a>
      </div>
    </StyledRepresentative>
  )
}
