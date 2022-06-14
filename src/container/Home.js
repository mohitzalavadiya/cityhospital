import React from 'react';

function Home(props) {

  return(
    <>
    {
        props.data.map((p,i) => {

        return(
    
           
           <ul>
           
           <li>{p.id}</li>
            <li>{p.name}</li>
            <li>{p.joining_date}</li>
            <li>{p.salary}</li>
           </ul>
            
        )

    })
    }
    </>
  )

    
}

export default Home;