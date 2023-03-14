import styled from "styled-components";
import './App.css';
import React, { useEffect  } from 'react';
import {useSelector} from 'react-redux'
import Webcam from "react-webcam";
import * as handPoseDetection from '@tensorflow-models/handpose';
import { useRef, useState } from 'react';
import '@tensorflow/tfjs-backend-webgl';
import {drawHand} from './utils'

import * as redu from './reduxx'


const Container = styled.div`
    height:100vh
    width: 100vh ;
    position: relative ;
    align-items: center;

  `

  const Drawa = styled.canvas`

    position: absolute;
    z-index:4
  `

  const Slider = {

    position: 'absolute',
    zIndex:'4'
  }





const App = () => {
  
  const moveContainer = (e) => {
    var cnt = 7
    if(e.target.id === "lisser") {
      cnt = document.getElementById('brr').getBoundingClientRect().x - 20 ;
    } else {
      cnt = document.getElementById('brr').getBoundingClientRect().x + 20 ;
    }
    document.getElementById('brr').style.left = cnt.toString() + "px" ;

  }

  const store = redu.store; 
  var state = store.getState()



  // const [record, setRecord] = useState(true)

  const webcamRef = useRef(null) ;
  const canvaRef = useRef(null) ;


  const runHandpose = async () => {
    const net = await handPoseDetection.load() ;
    console.log('Model succefully loaded!')

    setInterval(()=>{
      detect(net)
    },50)

  }

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState == 4 
    ){ 
      const video = webcamRef.current.video ;
      const videoWidth = video.videoWidth
      const videoHeight = video.videoHeight

      webcamRef.current.video.width = videoWidth ;
      webcamRef.current.video.height = videoHeight ;

      canvaRef.current.width = videoWidth ;
      canvaRef.current.height = videoHeight ;

      const hand = await net.estimateHands(video) ;
      // console.log(hand)

      const ctx = canvaRef.current.getContext("2d") ;
      drawHand(hand,ctx)
    }
  }  

  runHandpose();
  var what = state.record ? "STOP" : "PLAY"
  console.log("the state ",state.record)  
  const isRecording = useSelector((state) => { return state.record});

  return (
    <><button id="lisser" onClick={moveContainer}>LISSER</button>
    <button id="limen" onClick={moveContainer}>LIMEN</button>
    <button id="brrp"  onClick={(e)=>  store.dispatch({type:"changeRecord"})}>{what}</button>
    <Container id="brr">
          { isRecording ? <><Webcam  id="tss" audio={false} ref={webcamRef} /> <Drawa id="rrr" ref={canvaRef} /></>  : <div></div>}
             
    </Container>
    </>
  );

};



export default App;
