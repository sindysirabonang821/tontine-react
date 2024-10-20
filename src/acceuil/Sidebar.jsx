import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './acceuil.css'


class Sidbare extends Component{
    render(){
        return(
            <div className=''>
                  {/* <button 
                className="btn btn-primary position-fixed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#sidebar" 
                aria-expanded="false" 
                aria-controls="sidebar"
                style={{ top: '20px', left: '20px', zIndex: 1000 }}>
                Ouvrir / Fermer Sidebar
            </button> */}
                <div className='row  text-white text-center position-fixed top' id='side'>
                <div className=''> 
                <Link to="" className='link fw-bold '>
                    <h3 className='text-white li'>Bakéli tontine</h3>
                    </Link >
                    <Link to="/acceuil" className='link'>
                    <p className='mt-4 li'>Dasbord</p>
                    </Link>
                    <Link to="/utilisateur" className='link'>
                    <p className='mt-4 li'>Utilisateurs</p> 
                    </Link>
                    <Link to="/cotisation" className='link'> 
                    <p className='mt-4 li'>Cotisation</p>
                    </Link>
                    <Link to="/Parametre" className='link'>
                    <div class="btn-group">
                                <button type="button" className="btn text-white  fs-6 fw-semibold border border-0 dropdown-toggle li" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="false" aria-expanded="false">
                                  Parametres
                                </button>
                                <ul className="dropdown-menu g-0 bg text-white dropdown-menu-end dropdown-menu-lg-start border border-0 blue mx-2">
                                  <li className='mt-1 li'><Link to='/Parametregeneraux' className='link'><button  className="dropdown-item text-white m-0 p-0 li"  type="button">Parametre generaux</button></Link></li>
                                  <li className='mt-1 li'><Link to='/Parametreutilisateur'  className='link'><button  className="dropdown-item text-white m-0 p-0 li"  type="button">Utilisateurs</button></Link></li>
                                  <li className='mt-1 li'><Link to=''  className='link'><button  className="dropdown-item text-white m-0 p-0 li"  type="button">Archives</button></Link></li>
                                  <li className='mt-1 li'><Link to=''  className='link'><button  className="dropdown-item text-white m-0 p-0 li"  type="button">Membres Bloques</button></Link></li>
                                </ul>
                              </div>
                    </Link>
                </div>
                <div></div>
                </div>
            </div>
        )
    }
}
export default Sidbare