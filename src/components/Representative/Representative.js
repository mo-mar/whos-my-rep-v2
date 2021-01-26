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

export default function Representative({ repData }) {
  return (
    <div>
      {/* Todo: only add image if it is not broken, i.e. has height and/or width */}
      {repData.photo_url ? (
        <img src={repData.photo_url} alt={`${repData.name}`} />
      ) : null}
      <h1>{repData.name}</h1>
      <h2>
        {repData.elected_office} for {repData.district_name}
      </h2>
      <div>{repData.representative_set_name}</div>
      <div>{repData.email}</div>
      <div>{repData.party_name}</div>
      <div>
        <a href={repData.source_url}>Source</a>
      </div>
    </div>
  )
}
