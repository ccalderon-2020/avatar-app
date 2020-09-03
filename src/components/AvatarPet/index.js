import React, { Component } from 'react';
import './Styles.css';
import Pet from './../../constants/Pet';
import Breed from './Breed';
import FactSheet from './FactSheet';
import ScorePet from './ScorePet';
import bichon from './../../img/maltesToy.png';
import schnauzer from './../../img/Schnauzer.png';
import {PET_BICHON, PET_SCHNAUZER} from './../../constants/characteristic';


//const AvatarPet = () =>(
//<div className="AvatarPetCont">
//    <Pet avatar={avatar}></Pet>
//    <Breed breed={"Bichon Maltes"}></Breed>
//    <FactSheet FactSheet={"Ficha técnica - Bichon Maltes"}></FactSheet>
//    <ScorePet></ScorePet>
//</div>
//);

class AvatarPet extends Component {

    constructor(){
        super();

        console.log('bichon'+bichon);

        this.state = {
            
            info1 : {bichon},
            info2 : "Bichon Maltes",
            info3 : "Ficha técnica - Bichon Maltes",
        }
    };

    handlenextClick = () => {
        this.setState({
            info1 : {schnauzer},
            info2 : "Schnauzer",
            info3 : "Ficha técnica - Schnauzer",
        });
    }

    render(){
        const{info1, info2, info3} = this.state;

        console.log("Info1 =>"+ this.state.info1);

        return(
                <div className="AvatarPetCont">
                    <Pet avatar={info1}></Pet>
                    <Breed breed={info2}></Breed>
                    <FactSheet FactSheet={info3}></FactSheet>
                    <ScorePet></ScorePet>
                    <button onClick = {this.handlenextClick}>Siguiente</button>
                </div>
        );
    }
}

export default AvatarPet; 