import React from 'react';

function ColorLeft(props) {
    return (
        <div>Color: 
            <select onChange={(e)=>{
                if(props.setLeft){
                    props.setLeft(e.target.value);
                }
            }}>
                <option>Choose a Color</option>
                <option value="White">White</option>
                <option value="Red" style={{backgroundColor: 'red'}}>Red</option>
                <option value="Orange" style={{backgroundColor: 'orange'}}>Orange</option>
                <option value="Yellow" style={{backgroundColor: 'yellow'}}>Yellow</option>
                <option value="Green" style={{backgroundColor: 'green'}}>Green</option>
                <option value="Blue" style={{backgroundColor: 'blue'}}>Blue</option>
                <option value="Indigo" style={{backgroundColor: 'indigo'}}>Indigo</option>
                <option value="Violet" style={{backgroundColor: 'violet'}}>Violet</option>
            </select>
        </div>
    );
  }
  export default ColorLeft;