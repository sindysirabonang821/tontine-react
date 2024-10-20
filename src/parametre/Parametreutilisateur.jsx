import React, { Component } from 'react';
import Sidbare from '../acceuil/Sidebar';
import Nav from '../acceuil/Nave';
import { Link } from 'react-router-dom';

class Parautilisateur extends Component {
    render() {
        return (

            <div className='container-fluid'>
            <div className='row text-nowrap'>
                <div className='col col-md-2'>
                    <Sidbare/>
                </div>
                <div className='col col-md-10 flex-fill main'>
                <Nav nom="Paramétre"/>
                <div id="utilisateur2" className="section2 p-5 ">
                        <h1>Utilisateurs</h1>
                        <div className="container bg-white">
                            <div className="row">
                                <div className="col">
                                    <h4>Membre</h4>
                                    <div className="row">
                                        <div className="col-12 col-md-5">
                                            <table className="table no-border">
                                                <tbody id="tbody">
                                                    
                                                    <tr><td>Selena Roy</td></tr>
                                                    <tr><td>Emma Watson</td></tr>
                                                    <tr><td>Jhon Robert</td></tr>
                                                    <tr><td>Anne Hathaway</td></tr>
                                                    <tr><td>Ravi Shankar</td></tr>
                                                    <tr><td>Emma Stone</td></tr>
                                                    <tr><td>Floyd Miles</td></tr>
                                                    <tr><td>Janne Cooper</td></tr>
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-2 text-center" id="admin">
                                            <div className="trait mx-5"><div className="trai1"></div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-7">
                                    <h3>Information Générale</h3>
                                    <form action="" className="p-2">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="Nom" className="form-label">Nom</label>
                                                <input type="text" className="form-control" placeholder="Roy" required id="user_nom" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="Prenom" className="form-label">Prénom</label>
                                                <input type="text" className="form-control" placeholder="Selena" required id="user_prenom" />
                                            </div>
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="Naissance" className="form-label">Date de naissance</label>
                                                <input type="date" className="form-control" required id="user_Naissance" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="Profession" className="form-label">Profession</label>
                                                <input type="text" className="form-control" placeholder="Designer" id="user_profession" />
                                            </div>
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="passe" className="form-label">Définir Mot de passe</label>
                                                <input type="password" className="form-control" placeholder="*******" required id="user_mps" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="confirme" className="form-label">Confirmer mot de passe</label>
                                                <input type="password" className="form-control" placeholder="*******" required id="user_mp" />
                                            </div>
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="E-mail" className="form-label">E-mail</label>
                                                <input type="email" className="form-control" placeholder="selenaroy98@gmail.com" required id="user_mail" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phone" className="form-label">Téléphone</label>
                                                <input type="text" className="form-control" placeholder="+221 77 250 11 22" required id="user_phone" />
                                            </div>
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="Adress" className="form-label">Adresse</label>
                                                <input type="text" className="form-control" placeholder="HLM grand yoff, Dakar" required id="user_adress" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="organisation" className="form-label">Organisation</label>
                                                <input type="text" className="form-control" placeholder="volkeno" required id="user_orga" />
                                            </div>
                                        </div>
                                        <br />
                                        <button className="btn p-1 text-white MJ" id="mis_ajour" data-id="ID_UTILISATEUR">Mettre à jour</button>
                                    </form>
                                </div>
                            </div>
                            {/* Pagination */}
                            <nav aria-label="..." className="pt-4">
                                <ul className="pagination d-flex justify-content-center">
                                    <li className="page-item disabled">
                                        <span className="page-link border-0 bg-white txt-black">Previous page</span>
                                    </li>
                                    <div className="d-flex gap-1 mt-2" id="pagination">
                                        <li className="page-item"><Link className="page-link rounded-pill shadow-sm text-black" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link rounded-pill shadow-sm text-black" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link rounded-pill shadow-sm text-black" to="#">3</Link></li>
                                    </div>
                                    <li className="page-item border-0">
                                        <span className="page-link text-black border-0 bg-white">Next page</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            // <div className="container">
            //     <div className="row">

            //         <div id="utilisateur2" className="section2 p-5 bg-light">
            //             <h1>Utilisateurs</h1>
            //             <div className="container bg-white">
            //                 <div className="row">
            //                     <div className="col">
            //                         <h4>Membre</h4>
            //                         <div className="row">
            //                             <div className="col-12 col-md-5">
            //                                 <table className="table no-border">
            //                                     <tbody id="tbody">
            //                                         {/* 
            //                                         <tr><td>Selena Roy</td></tr>
            //                                         <tr><td>Emma Watson</td></tr>
            //                                         <tr><td>Jhon Robert</td></tr>
            //                                         <tr><td>Anne Hathaway</td></tr>
            //                                         <tr><td>Ravi Shankar</td></tr>
            //                                         <tr><td>Emma Stone</td></tr>
            //                                         <tr><td>Floyd Miles</td></tr>
            //                                         <tr><td>Janne Cooper</td></tr>
            //                                         */}
            //                                     </tbody>
            //                                 </table>
            //                             </div>
            //                             <div className="col-md-2 text-center" id="admin">
            //                                 <div className="trait mx-5"><div className="trai1"></div></div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="col-12 col-md-7">
            //                         <h3>Information Générale</h3>
            //                         <form action="" className="p-2">
            //                             <div className="row g-3">
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="Nom" className="form-label">Nom</label>
            //                                     <input type="text" className="form-control" placeholder="Roy" required id="user_nom" />
            //                                 </div>
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="Prenom" className="form-label">Prénom</label>
            //                                     <input type="text" className="form-control" placeholder="Selena" required id="user_prenom" />
            //                                 </div>
            //                             </div>
            //                             <div className="row g-3">
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="Naissance" className="form-label">Date de naissance</label>
            //                                     <input type="date" className="form-control" required id="user_Naissance" />
            //                                 </div>
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="Profession" className="form-label">Profession</label>
            //                                     <input type="text" className="form-control" placeholder="Designer" id="user_profession" />
            //                                 </div>
            //                             </div>
            //                             <div className="row g-3">
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="passe" className="form-label">Définir Mot de passe</label>
            //                                     <input type="password" className="form-control" placeholder="*******" required id="user_mps" />
            //                                 </div>
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="confirme" className="form-label">Confirmer mot de passe</label>
            //                                     <input type="password" className="form-control" placeholder="*******" required id="user_mp" />
            //                                 </div>
            //                             </div>
            //                             <div className="row g-3">
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="E-mail" className="form-label">E-mail</label>
            //                                     <input type="email" className="form-control" placeholder="selenaroy98@gmail.com" required id="user_mail" />
            //                                 </div>
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="phone" className="form-label">Téléphone</label>
            //                                     <input type="text" className="form-control" placeholder="+221 77 250 11 22" required id="user_phone" />
            //                                 </div>
            //                             </div>
            //                             <div className="row g-3">
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="Adress" className="form-label">Adresse</label>
            //                                     <input type="text" className="form-control" placeholder="HLM grand yoff, Dakar" required id="user_adress" />
            //                                 </div>
            //                                 <div className="col-md-6">
            //                                     <label htmlFor="organisation" className="form-label">Organisation</label>
            //                                     <input type="text" className="form-control" placeholder="volkeno" required id="user_orga" />
            //                                 </div>
            //                             </div>
            //                             <br />
            //                             <button className="btn p-1 text-white MJ" id="mis_ajour" data-id="ID_UTILISATEUR">Mettre à jour</button>
            //                         </form>
            //                     </div>
            //                 </div>
            //                 {/* Pagination */}
            //                 <nav aria-label="..." className="pt-4">
            //                     <ul className="pagination d-flex justify-content-center">
            //                         <li className="page-item disabled">
            //                             <span className="page-link border-0 bg-white txt-black">Previous page</span>
            //                         </li>
            //                         <div className="d-flex gap-1 mt-2" id="pagination">
            //                             <li className="page-item"><a className="page-link rounded-pill shadow-sm text-black" href="#">1</a></li>
            //                             <li className="page-item"><a className="page-link rounded-pill shadow-sm text-black" href="#">2</a></li>
            //                             <li className="page-item"><a className="page-link rounded-pill shadow-sm text-black" href="#">3</a></li>
            //                         </div>
            //                         <li className="page-item border-0">
            //                             <span className="page-link text-black border-0 bg-white">Next page</span>
            //                         </li>
            //                     </ul>
            //                 </nav>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Parautilisateur;
