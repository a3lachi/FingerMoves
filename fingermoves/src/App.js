import styled from "styled-components";
import './App.css';
import React, { useEffect } from 'react';
import Webcam from "react-webcam";
import * as handPoseDetection from '@tensorflow-models/handpose';
import { useRef } from 'react';
import '@tensorflow/tfjs-backend-webgl';



const Container = styled.div`
    height:100vh
    width: 100vh ;
    position: relative ;
    align-items: center;

  `

  const Drawa = styled.canvas`
    width:700px ;
    height: 100% ;
    position: absolute;
    top: 20vh;
    left: 200px; 
    
    z-index:4
  `

  const Slider = styled.div`
    width:700px ;
    height: 100% ;
    position: absolute;
    top: 20vh;
    left: 200px; 
    
    z-index:4
  `

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

  const webcamRef = useRef(null) ;
  const canvaRef = useRef(null) ;


  const runHandpose = async () => {
    const net = await handPoseDetection.load() ;
    console.log('Model succefully loaded!')

    // loop and detect within a frame 

  }

  // const detect = await (net) => {
  //   if (
  //     typeof webcamRef.current !== 'undefined' &&
  //     webcamRef.current !== null &&
  //     webcamRef.current.video.readyState == 4 
  //   ){
  //     const video = webcamRef.current.video ;
  //     const videoWidth = video.videoWidth
  //     const videoHeight = video.videoHeight

  //     webcamRef.current.video.width = videoWidth ;
  //     webcamRef.current.video.height = videoHeight ;

  //   }
  // }  

  runHandpose();


  return (
    <><button id="lisser" onClick={moveContainer}>LISSER</button>
    <button id="limen" onClick={moveContainer}>LIMEN</button>
    <Container>
        <Slider id="brr">
          <Webcam  audio={false} ref={webcamRef} />
        </Slider>
        
      </Container>
    </>
  );
};



export default App;
