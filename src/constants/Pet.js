import React from 'react';
import './../components/AvatarPet/Styles.css';
import {PET_BICHON, PET_SCHNAUZER} from './characteristic';

const Pet = ({avatar}) =>(
    <div className="PetCont">
        <img
            src={PET_BICHON}
            alt= "pet"
        />
    </div>

);


export default Pet;