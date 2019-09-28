import React from 'react';

function LocationLeft(props) {
    return (
        <div>Location: 
            <select onChange={(e)=>{
                if(props.setLeft){
                    props.setLeft(e.target.value);
                }
            }}>
                <option>Choose a Position</option>
                <option value="Left: 1 o'Clock">1 o'Clock</option>
                <option value="Left: 2 o'Clock">2 o'Clock</option>
                <option value="Left: 3 o'Clock">3 o'Clock</option>
                <option value="Left: 4 o'Clock">4 o'Clock</option>
                <option value="Left: 5 o'Clock">5 o'Clock</option>
                <option value="Left: 6 o'Clock">6 o'Clock</option>
                <option value="Left: 7 o'Clock">7 o'Clock</option>
                <option value="Left: 8 o'Clock">8 o'Clock</option>
                <option value="Left: 9 o'Clock">9 o'Clock</option>
                <option value="Left: 10 o'Clock">10 o'Clock</option>
                <option value="Left: 11 o'Clock">11 o'Clock</option>
                <option value="Left: 12 o'Clock">12 o'Clock</option>   
            </select>
        </div>
    );
  }
  export default LocationLeft;