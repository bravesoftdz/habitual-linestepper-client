import React from 'react'
import Ticker from 'react-ticker'


          // <span>CSS/SASS</span>
          // <span>GraphQL</span>
          // <span>AWS</span>
          // <span>Redux</span>
          // <span>React Native</span>

const TickerTape = () => {
  return (
    <>
      <Ticker
        offset="100%"
        speed={10}
      >
        {() => (
          <>
            <h1>React</h1>
          </>
        )}
      </Ticker>
      <Ticker>
        {() => (
          <>
          <h1>HTML</h1>
          </>
        )}
      </Ticker>

    </>
  )
}

export default TickerTape
