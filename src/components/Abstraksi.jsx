import React from 'react';


function Welcome(props){
  return <h1>Halo, {props.name}</h1>;
}

function Abstraksi(){
  return(
    <div>
      <Welcome name="Khalisa"/>
      <Welcome name="Khadijah"/>
      <Welcome name="Laila"/>
    </div>
  );
}

export default Abstraksi