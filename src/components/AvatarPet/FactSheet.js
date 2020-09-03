import React from 'react';
import './Styles.css';
import PropTypes from 'prop-types';

const FactSheet = ({FactSheet}) =>(
    <div className="FactSheetCont">
        {FactSheet}
    </div>
);

FactSheet.propTypes ={
    FactSheet: PropTypes.string.isRequired,   
}

export default FactSheet;