

import { cloneElement } from 'react';
import { createStore } from 'redux'






///  STATE  /////////////////////////////////////////////////////////////////////////////////////////////
const initialState = {

    record : true,
    details : false,
    background: "white"
} ;
////////////////////////////////////////////////////////////////////////////////////////////////





//// ACTIONZZ //////////////////////////////////////////////////////////////////////////////////
export const stopRecordAction = {
    type:"stopRecord" 
}
const  playRecordAction = {
    type:"playRecord" 
}



const recordAction = (whattodo) => ({
    type:"recordAction",
    payload : { action : whattodo}
});

////////////////////////////////////////////////////////////////////////////////////////////////




// REDUCER  //////////////////////////////////////////////////////////////////////////////////////////
const reducer = (state,action) => {
    if(action.type == "changeRecord") {
        console.log('WARAH DKHLNA ZBI')
        return {
            ...state,
            record: !state.record,
        }
    }

    return state ;
}
////////////////////////////////////////////////////////////////////////////////////////////////






/////  STORE   /////////////////////////////////////////////////////////////////////////////////
export const store = createStore(reducer, initialState)


store.subscribe(
    () => {
        console.log("STORE SUBSCRIBE", store.getState());
        // qdiLgharad(store.getState())
    }
 );
// const state = store.getState(); 

//   // on passe un objet action
// store.dispatch({type:"stopRecord"});
// // on passe une action depuis une variable
// store.dispatch(playRecordAction);
// // on passe une action en utilisant un action creator
// store.dispatch(recordAction("stopRecord"));




////////////////////////////////////////////////////////////////////////////////////////////////

const qdiLgharad = (state) => {
   if(state.record && document.getElementById('brr'))  document.getElementById('brr').prepend(state.video) 
   else { 
    if(document.getElementById('tss')) document.getElementById('tss').remove() ;
   }
}