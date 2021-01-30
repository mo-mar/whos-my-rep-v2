/**
 * Full data available in repData prop that is passed in:
 *  Note: only the following are available in all responses
 * 
 * name
district_name
elected_office
source_url


elected_office: "MPP"
email: "BKarpoche-QP@ndp.on.ca"
extra: {constituency_email: "BKarpoche-CO@ndp.on.ca"}
first_name: "Bhutila"
gender: ""
last_name: "Karpoche"
name: "Bhutila Karpoche"
offices: [{type: "legislature", fax: "1 416 763-5640"}, {type: "constituency", tel: "1 416 763-5630"}]
party_name: "New Democratic Party of Ontario"
personal_url: ""
photo_url: "https://www.ola.org/sites/default/files/member/profile-photo/bhutila_karpoche.jpg"
related: {boundary_url: "/boundaries/ontario-electoral-districts-representation-act-2015/parkdale-high-park/",…}
representative_set_name: "Legislative Assembly of Ontario"
source_url: "https://www.ola.org/en/members/current/contact-information"
url: "https://www.ola.org/en/members/all/bhutila-karpoche"} param0 
 */

import styled from 'styled-components'
import fallBackImage from '../../Images/blank-profile-pic.png'

import { useState, useEffect } from 'react'
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

const RepImageContainer = styled.div`
  width: 70%;
  margin-top: 0.8rem;
  img {
    width: 100%;
    border-radius: 10%;
  }
`

export default function Representative({ repData }) {
  const [imageError, setImageError] = useState(false)
  const [shouldUseFallBackImage, setShouldUseFallBackImage] = useState(false)

  useEffect(() => {
    if (imageError) {
      setShouldUseFallBackImage(true)
      setImageError(false)
    }
  }, [imageError])

  return (
    <StyledRepresentative>
      <RepImageContainer>
        <img
          onError={() => setImageError(true)}
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
      <div>Contact: {repData.email}</div>
      <div>{repData.party_name}</div>
      <div>
        <a href={repData.source_url}>Source</a>
      </div>
    </StyledRepresentative>
  )
}
