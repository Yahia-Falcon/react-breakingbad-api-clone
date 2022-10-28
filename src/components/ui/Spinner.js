import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => (
 <img src={spinner} style={{display: "block", width: "200px", margin: "auto"}} alt="loading" />
);

export default Spinner;