import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Bubble from 'components/Bubble'
import Container from 'components/Container'

const CounterWorld = ({ number, view, type }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTimeZone
      }
    }
  `)

  const updatedAt = data.site.buildTimeZone

  return (
    <Container className="counterCard">
      <Container className="header">
        <Container className="bubble">
          <Bubble view={view} />
        </Container>
        <p>Världen</p>
      </Container>

      {type != 'details' ? (
        <Container className="confirmedNumberContainer">
          <Container className="line"></Container>
          {number > 1000 ? (
            <h2>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
          ) : (
            <h1>{number}</h1>
          )}
        </Container>
      ) : (
        <Container className="confirmedNumberContainer">
          <Container className="line"></Container>
          {number > 1000 ? (
            <h2 className={view === 'world' ? 'hWorld' : 'hSweden'}>
              {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </h2>
          ) : (
            <h1 className={view === 'world' ? 'hWorld' : 'hSweden'}>
              {number}
            </h1>
          )}
        </Container>
      )}
      <Container className="confirmedText">
        <h3>Bekräftade fall</h3>
      </Container>
      <Container className="updatedText">
        <p>UPPDATERAT {updatedAt.substring(0, updatedAt.length - 6)}</p>
      </Container>
    </Container>
  )
}

export default CounterWorld
