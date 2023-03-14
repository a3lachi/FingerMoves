



export const drawHand = (prediction, ctx) => {
    if(prediction.length>0) {
        prediction.forEach(pred => {
            const landmarks = pred.landmarks ; 

            for (let i =0; i<landmarks.length ; i++) {
                const x  = landmarks[i][0]
                const y = landmarks[i][1]
                ctx.beginPath() ;
                ctx.arc(x,y,5,0,3*Math.PI)
                ctx.fillStyle = 'red';
                ctx.fill();
            }
        });
    }
}