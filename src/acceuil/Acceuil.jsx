import React, { Component } from 'react';
import Sidbare from './Sidebar';
import Nav from './Nave';
import Pricipal from './Principalcard';
import Dasbord2 from './Dasbord2';
import Dasbord3 from './Dsbord3';

class Acceuil extends Component{
    render(){
        return(
            <div className="container-">
                <div className="row">
                <div className=' col-md-2'>
                        <Sidbare/>
                    </div>
                    <div className=' col-md-10  flex-fill main '>
                    <Nav nom="Admin Dashboard"/>
                    <div className=" ">
                    <Pricipal />
                    <Dasbord2/>
                    <Dasbord3/>
                    </div>

                    </div>

                </div>
            </div>

        )
    }
}
export default Acceuil