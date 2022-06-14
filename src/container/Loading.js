import React from 'react';

function Loading(Component) {
  return  function loadingdata({loading, data}){
        if(loading){
            return(
                <p>Loading...</p>
            )

        }
        else{
            return(
                <Component data = {data}/>
            )
        }
    }
   
}

export default Loading;