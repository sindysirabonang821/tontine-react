import React, { Component } from 'react';
import Sidbare from '../acceuil/Sidebar';
import Nav from '../acceuil/Nave';

class Parametre extends Component{
    render(){
        return(
            <div className='container-fluid'>
            <div className='row'>
                <div className='col col-md-2'>
                    <Sidbare/>
                </div>
                <div className='col col-md-10 flex-fill main'>
                <Nav nom="Paramétre"/>
                {/* <Cotisation1/>
                <Cotisation2/> */}
                {/* <Dasbord3/> */}
                </div>
            </div>
        </div>
        )
    }
}
export default Parametre