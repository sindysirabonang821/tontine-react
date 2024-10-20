import React, { Component } from 'react';
import Sidbare from '../acceuil/Sidebar';
import Nav from '../acceuil/Nave';
import Cotisation2 from './Tableaucotisation';
import Modalcotisation from './Modalcotisation';
class Cotisation extends Component{
    render(){
        return(
            <div className='container-fluid'>
            <div className='row'>
                <div className='col col-md-2'>
                    <Sidbare/>
                </div>
                <div className='col col-md-10 flex-fill main'>
                <Nav nom="Cotisation"/>
                <div className="mx-5">
                <Modalcotisation/>
                <Cotisation2/>
                {/* <Dasbord3/> */}
                </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Cotisation