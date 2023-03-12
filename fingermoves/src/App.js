import styled from "styled-components";
import './App.css';
import React from 'react';
import Webcam from "react-webcam";


const App = () => {

  const webcamRef = React.useRef(null);

  const Container = styled.div`
    height:100vh
    width: 100vh ;
    position: relative ;
    align-items: center;

  `

  const Slider = styled.div`
    width:700px ;
    height: 100% ;
    position: absolute;
    top: 20vh;
    left: 200px; 
    
    z-index:4
  `

  const moveContainer = (e) => {
    var cnt = 7
    if(e.target.id === "lisser") {
      cnt = document.getElementById('brr').getBoundingClientRect().x - 20 ;
    } else {
      cnt = document.getElementById('brr').getBoundingClientRect().x + 20 ;
    }
    document.getElementById('brr').style.left = cnt.toString() + "px" ;

  }




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
