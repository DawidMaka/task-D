import React, { useState, useRef, useEffect, useCallback } from 'react'
import Buttons from '../components/Buttons/Buttons'
import NumberOne from '../components/NumberOne/NumberOne'
import NumberTwo from '../components/NumberTwo/NumberTwo'
import NumberThree from '../components/NumberThree/NumberThree'

const App = () => {
  const [counter, setCounter] = useState(-1)
  const interval = useRef(null);

  const handleIncrement = (number) => {
    clearInterval(interval.current);
    setCounter(number)
    interval.current = setInterval(() => {
      setCounter((prevValue) => prevValue + 1)
    }, 1000)
  };

  const handleDecrement = (number) => {
    clearInterval(interval.current);
    setCounter(number)
    interval.current = setInterval(() => {
      setCounter((prevValue) => prevValue - 1)
    }, 1000)
  };

  const counterReset = useCallback(() => {
    clearInterval(interval.current);
    setCounter(-1);
  }, [])

  useEffect(() => {
    if (counter === 4 || counter === 0) {
      clearInterval(interval.current);
      setCounter(0);
    }
  }, [counter])

  return (
    <>
      <header>
        <h1>Recruitment Task</h1>
      </header>
      <main>
        <Buttons>
          <div>
            <NumberOne onClick={() => handleDecrement(3)}>
              | w lewo |
            </NumberOne>
            {counter === 1 || counter === 0 ? (
              <p>1</p>
            ) : null }
          </div>
          <div>
            <NumberTwo onClick={counterReset}>| reset |</NumberTwo>
            {counter === 2 || counter === 0 ? (
              <p>2</p>
            ) : null }
          </div>
          <div>
            <NumberThree onClick={() => handleIncrement(1)}>
              | w prawo |
            </NumberThree>
            {counter === 3 || counter === 0 ? (
              <p>3</p>
            ) : null }
          </div>
        </Buttons>
      </main>
    </>
  )
}

export default App
