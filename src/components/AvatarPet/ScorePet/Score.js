import React from 'react';
import './Styles.css';
import PropTypes from 'prop-types';

const Score =({characterictic, score:[score1, score2, score3, score4, score5]}) =>{

    return  <div className="ScoreCont">
                <div className= "ScoreCont-info">
                    
                    <p>{characterictic}</p>
                    <div>
                    <img src={score1}  alt=""></img>
                    <img src={score2}  alt=""></img>
                    <img src={score3}  alt=""></img>
                    <img src={score4}  alt=""></img>
                    <img src={score5}  alt=""></img>
                    </div>                
                </div>               

            </div>

};

Score.propTypes ={

    characterictic: PropTypes.string.isRequired,
}

export default Score;