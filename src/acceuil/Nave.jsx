import React, { Component } from 'react';
import user from '../assets/user.png'
// import Image from './imgconnec';

class Nav extends Component{
    render(){
        const { nom } = this.props; 
        return(
            <div className='container '>
                <div className=' '>
                <div className="bg-white white p-3 shadow d-flex  align-items-center position-fixed navbar">
                <div className="none">
                    <span className="fw-bold fs-5 span ">{this.props.nom}</span>
                </div>
                <div className="d-flex align-items-center">
                    <div className="me-3"><i class="bi bi-bell"></i></div>
                    <div className="d-flex">
                        <div>
                             <img src={user} alt="Admin"/>
                        </div>
                        <div>
                            <span class="fw-semibold">Ndiaga Sall</span> <br/>
                            <span class="text-secondary">Adminitrator</span>
                        </div>
                    </div>

                    <div>
                        <div className="btn-group non">
                            <button type="button" class="btn btn-secondary border border-0 dropdown-toggle bg-white text-dark" data-bs-toggle="dropdown" data-bs-display="stati" aria-expanded="false">
                              
                            </button>
                            <ul className="dropdown-menu   dropdown-menu-lg-end ">
                                
                              <li><button className="dropdown-item text-secondary text-center" type="button">Profil</button></li>
                              <li><button className="dropdown-item text-secondary text-center" type="button">Mot de Passe</button></li>
                              <li><button className="dropdown-item text-secondary text-center" type="button">Déconnexion</button></li>
                            </ul>
                          </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        )
    }
}
export default Nav