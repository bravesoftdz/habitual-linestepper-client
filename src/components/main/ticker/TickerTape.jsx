import React from 'react'
import Ticker from 'react-ticker'


import './tickerTape.css';

const TickerTape = () => {
  const [move, setMove] = React.useState(true)
  return (
    <>
      <Ticker
        offset="run-in"
        speed={7}
        move={move}
      >
        {() => (
          <>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">NodeJS</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">React</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">HTML</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">CSS/SASS</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">GraphQL</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">AWS</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">Redux</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">React Native</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">Azure</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">Typescript</span>
            <span onMouseEnter={() => setMove(false)} onMouseLeave={() => setMove(true)} className="ticker-item">NestJS</span>
          </>
        )}
      </Ticker>
    </>
  )
}

export default TickerTape
