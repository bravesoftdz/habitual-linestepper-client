import React from 'react'
import Ticker from 'react-ticker'


import './tickerTape.css';

const TickerTape = () => {
  const [move, setMove] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      setMove(true);
    }, 1000)
  }, [])
  return (
    <>
      <Ticker
        offset="run-in"
        speed={7}
        move={move}
      >
        {() => (
          <>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>NodeJS</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>React</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>HTML</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>CSS/SASS</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>GraphQL</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>AWS</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>Redux</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>React Native</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>Azure</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>Typescript</span>
            <span className="ticker-item" onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)}>NestJS</span>
          </>
        )}
      </Ticker>
    </>
  )
}

export default TickerTape
