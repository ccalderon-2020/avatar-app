import React from 'react';
import Score from './Score';
import {
    CHARACT1, 
    CHARACT2, 
    CHARACT3, 
    CHARACT4, 
    CHARACT5, 
    CHARACT6, 
    CHARACT7, 
    CHARACT8,
    CHARACT1SCORE,
    CHARACT2SCORE,
    CHARACT3SCORE,
    CHARACT4SCORE,
    CHARACT5SCORE,
    CHARACT6SCORE,
    CHARACT7SCORE,
    CHARACT8SCORE,
    } from './../../../constants/characteristic';

const ScorePet = () =>{

   return   <div className="ScorePetCont">
                <Score characterictic={CHARACT1} score={CHARACT1SCORE}></Score>   
                <Score characterictic={CHARACT2} score={CHARACT2SCORE}></Score> 
                <Score characterictic={CHARACT3} score={CHARACT3SCORE}></Score> 
                <Score characterictic={CHARACT4} score={CHARACT4SCORE}></Score> 
                <Score characterictic={CHARACT5} score={CHARACT5SCORE}></Score> 
                <Score characterictic={CHARACT6} score={CHARACT6SCORE}></Score>
                <Score characterictic={CHARACT7} score={CHARACT7SCORE}></Score> 
                <Score characterictic={CHARACT8} score={CHARACT8SCORE}></Score>     
            </div>

};

export default ScorePet;