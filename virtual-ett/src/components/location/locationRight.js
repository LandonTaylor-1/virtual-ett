import React from 'react';

function LocationRight(props) {
    return (
        <div>Location: 
            <select onChange={(e)=>{
                if(props.setRight){
                    props.setRight(e.target.value);
                }
            }}>
                <option>Choose a Position</option>
                <option value="Right: 1 o'Clock">1 o'Clock</option>
                <option value="Right: 2 o'Clock">2 o'Clock</option>
                <option value="Right: 3 o'Clock">3 o'Clock</option>
                <option value="Right: 4 o'Clock">4 o'Clock</option>
                <option value="Right: 5 o'Clock">5 o'Clock</option>
                <option value="Right: 6 o'Clock">6 o'Clock</option>
                <option value="Right: 7 o'Clock">7 o'Clock</option>
                <option value="Right: 8 o'Clock">8 o'Clock</option>
                <option value="Right: 9 o'Clock">9 o'Clock</option>
                <option value="Right: 10 o'Clock">10 o'Clock</option>
                <option value="Right: 11 o'Clock">11 o'Clock</option>
                <option value="Right: 12 o'Clock">12 o'Clock</option>   
            </select>
        </div>
    );
  }
  export default LocationRight;