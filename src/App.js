import {  Stage  } from '@inlet/react-pixi'
import styles from './App.module.css'
import React from 'react'
import Square from './components/Square'




const App = () => {

  const width = window.innerWidth * 0.7
  const height = window.innerHeight * 0.5
  const options = {
    backgroundColor: 0xaed8e6,
    antialias: true,
    autoDensity: true,
  }



  return (
   
        <div className={styles.container}>
          <Stage
            className={styles.stage}
            options={options}>
          <Square appWidth={width} appHeight={height}/>
          </Stage>
        </div>
   
  )
}

export default App
