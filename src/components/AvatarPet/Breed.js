import React from 'react';
import './Styles.css';
import PropTypes from 'prop-types';

const Breed = ({breed}) => (
    <div className="BreedCont">{breed}</div>

);

Breed.propTypes ={

    breed : PropTypes.string.isRequired
}

export default Breed;