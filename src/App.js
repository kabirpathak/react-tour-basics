import React from 'react'
import Tour from './component/Tour'
import { useState } from 'react'

export default function App() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  const onClick = () => {
    setIsTourOpen(!isTourOpen);
  }

  const TS = [
    {
      target: '#btn1',
      content: " button.",
      disableBeacon: true,
    },
    {
      target: '#btn2',
      content:
        "This is the second button",
    },
    {
      target: '#btn3',
      content: "This is the third button",
    },
    {
      target: '#x',
      content: "This is the rest of the screen.",
    },
  ];
  

  return (
    <>
      <div id='x'>
        <button className={'btn'} id='btn1'>button 1</button>
        <button id='btn2'>button 2</button>
        <button id='btn3'>button 3</button>
        
      </div>
      <div>
        <button className={'btn'} onClick = {onClick}>Start tour!</button>
         {isTourOpen ? <Tour TOUR_STEPS = {TS} /> : null}
      </div>
    </>
  )
}
