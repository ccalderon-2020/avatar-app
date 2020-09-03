import React from 'react';
import './Styles.css';

const Pet = ({avatar}) =>(
    <div className="PetCont">
        <img
            src={avatar}
            alt= "pet"
        />
    </div>

);


export default Pet;