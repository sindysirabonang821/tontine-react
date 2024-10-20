import React, { Component } from 'react';
import Photoinscri from './Photoinscri';
import Forminscri from './Forminscri';
class Inscription extends Component{
render(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col col-sm-12 col-md-5'>
                    <Photoinscri/>
                </div>
                <div className='col col-sm-12 col-md-7'>
                <Forminscri/>
                </div>
            </div>
        </div>
    )
}
}
export default Inscription