import styled from 'styled-components'

const StyledAboutContainer = styled.div`
  width: 80%;
  text-align: center;
  line-height: 1.2rem;
  h3 {
    font-size: 1.4rem;
  }
  p {
    margin: 1rem 0;
    font-size: 1rem;
  }
  a {
    color: #3283ca;
    font-weight: 700;
  }
`
export default function About() {
  return (
    <StyledAboutContainer data-testid="about-container">
      <h3>What</h3>
      <p>
        "Who's My Rep?" is a simple tool to connect Canadians with their
        political representatives.
      </p>
      <h3>How</h3>
      <p>
        Pulling in data from the incredibly useful{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://represent.opennorth.ca/api/"
        >
          Represent Civic Information API
        </a>{' '}
        from Open North, this app displays all the elected officials that
        represent you and filters them by their office type (federal, municipal,
        etc.)
      </p>
      <p>
        Postal Codes are first used to generate longitude and latitude, which
        are then fed to the Represent API. This ensures you get the most
        accurate results, since postal code boundaries can (and do!) change.
      </p>
      <h3>Why</h3>
      <p>
        Because knowing who represents you is important. Also it was a cool
        project to build.{' '}
      </p>
      <h3>Who</h3>
      <p>
        "Who's My Rep" was built (then re-built) by{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/mo-mar"
        >
          Mohamed Omar
        </a>{' '}
        using React.js.
      </p>
    </StyledAboutContainer>
  )
}
