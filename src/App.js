import React, { useState} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Profile from './Profile';
import { reviews } from './reviews'

function App() {
  const [info, setInfo] = useState(reviews)
  const [nav, setNav] = useState(0)

  const next = () => {
    if (nav < info.length - 1) {
      setNav(nav + 1)
    } else {
      setNav(0)
    }
  }

  const prev = () => {
    if (nav > 0) {
      setNav(nav - 1)
    } else {
      setNav(info.length - 1)
    }
  }

  const random = () => {
    let num = Math.floor(Math.random() * info.length)
    setNav(num)
  }

  return (
    <main className="container">
      <h1 className='title-head'>our reviews</h1>
      <div className="wrapper">
        <Profile key={info[nav].id} {...info[nav]} />

        <footer className="foot">
          <div className="btn-wrapper">
            <button className="prev-btn btn" onClick={prev}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className="next-btn btn" onClick={next}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          <button className='random' onClick={random}>surprise me</button>
        </footer>
      </div>
    </main>
  );
}

export default App;