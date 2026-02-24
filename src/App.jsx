import { useState } from 'react'
import './App.scss'
import Header from './components/header/header';
import Homepage from './components/homepage/homepage';

import Countdown from './components/homepage/countdown/countdown';


function App() {

  return (
    <>
    <Header />
    <Homepage />
    <Countdown/>
  </>
  )
}

export default App
