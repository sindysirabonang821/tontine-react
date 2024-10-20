import React, { Component } from 'react';
import Sidbare from '../acceuil/Sidebar';
import Nav from '../acceuil/Nave';
import Utilisateur2 from './Modalutilisateur';
import Utilisateur3 from './Tableauutilisateur';

class Utilisateur extends Component{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col col-md-2'>
                        <Sidbare/>
                    </div>
                    <div className='col col-md-10 flex-fill main'>
                    <Nav nom="Utilisateur"/>
                    <div className="mx-5 ">
                    {/* <Utilisateur1/> */}
                    <Utilisateur2/>
                    <Utilisateur3/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Utilisateur