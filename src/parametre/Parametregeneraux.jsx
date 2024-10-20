import React, { Component } from 'react';
import user from '../assets/user.png'
import Sidbare from '../acceuil/Sidebar';
import Nav from '../acceuil/Nave';
import { Link } from 'react-router-dom';

class Generalparam extends Component{
    render(){
        return(
                                
            <div className='container-fluid'>
                                
                <div className='row '>
                 <div className='col col-md-2'>
                    <Sidbare/>
                 </div>
                    <div className='col col-md-10 flex-fill main '>
                    <Nav nom="Paramétre"/>
                    <div className='beige '>
                    <h1 className=' mt-5'>Parametre Generaux</h1>
                    <div className="row p-5 border border-1 bg-white wei">
                    <div className=" col-12 col-md-4 ">
                          <div className="row">
                            <div className="col">
                              <div className=" text-center">
                                <p className="text-lit fw-bold  ">profil</p>
                                <img src={user} alt="" class="rounded-circle img-profile w-50"/>
                            </div>
                            <div className="row  text-center">
                                <h3 className="text-center  vert text-nowrap" id="info5">Ndiagua Sall</h3>
                                <h5 className="mx-2 vert" id="info6">Admin</h5>
                                <br/>
                                <br/>
                                {/* <!-- ------modal-edifier------- --> */}

                                <button type="button " className=" mx-5 MJ  btn p-0 w-75">
                                <Link to="" className="text-white">Editer profil</Link>
                                  </button>
                                  
                                </div>
                        </div>
                        <div className="col-md-2 text-center" id="admin">
                            <div className="trait mx-3"><div class="trai1"></div></div>
                        </div>
                            </div>
                            <div className="col"></div>
                          </div>
                    <div className="col">
                    {/* <!-- -------------info--------------- --> */}
                                 <div class="row">
                                    <h6 class=" fw-bold vert-claire">Informations Générals</h6>
                                 </div>
                                <div
                                    class="row  border-bottom pt-3">
                                    <div class="col-md-8">Prénom
                                    </div>
                                    <div class="col-md-4 text-center"><p id="info1">Ndiagua</p></div>
                                </div>
                                <div
                                    class="row border-bottom pt-3">
                                    <div class="col-md-8">Nom
                                    </div>
                                    <div class="col-md-4 text-center"><p id="info2">Sall</p></div>
                                </div>
                                <div
                                    class="row border-bottom pt-3">
                                    <div class="col-md-8">Statut
                                    </div>
                                    <div class="col-md-4 text-center"><p id="info3">Administrateur</p></div>
                                </div>
                                <div
                                class="row  pt-3">
                                <div class="col-md-8">E-mail
                                </div>
                                <div class="col-md-4 text-center"><p id="info4">ndiagua@gmail.com</p></div>
                            </div>


                                {/* <!-- --------statistique------- --> */}
                                 <div class="row">
                                    <h6 class=" fw-bold  vert-claire mt-2 border-bottom ">Statistiques</h6>

                                 </div>
                                <div
                                    class="row  border-bottom pt-3">
                                    <div class="col-md-8"><p>Nombre de membre ajoutés</p>
                                    </div>
                                    <div class="col-md-4 text-center">25</div>
                                </div>
                                <div
                                    class="row border-bottom pt-3">
                                    <div class="col-md-8">Nombre de membre archivés
                                    </div>
                                    <div class="col-md-4 text-center">10</div>
                                </div>
                                <div
                                    class="row  pt-3">
                                    <div class="col-md-8">Nombre de membre bloqués
                                    </div>
                                    <div class="col-md-4 text-center">4</div>
                                </div>
                    </div>
                    </div>
                    </div>


                </div>
            </div>
        </div>
        )
    }
}
export default Generalparam