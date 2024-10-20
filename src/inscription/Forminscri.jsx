import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './inscription.css';
class Forminscri extends Component{
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                <div className="col-10 text-center ">
                <h3 className="text-success fst-italic  mb-4" id="p">Inscription</h3>
            </div>
            <form id="form" class="ms-5">
                <div className="d-flex container gap-5">
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1"  className="form-label fw-medium">Nom</label>
                         <input type="text" className="form-control" required id="inscri_nom" />
                    </div>
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1" className="form-label fw-medium">Prénom</label>
                         <input type="text" className="form-control " required id="inscri_prenom"/>
                    </div>
                </div>
                 <div className="d-flex container gap-5">
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1" className="form-label fw-medium">Date de naissance</label>
                         <input type="date" className="form-control " required id="inscri_date" />
                    </div>
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1" className="form-label fw-medium">Profession</label>
                         <input type="text" className="form-control " required id="inscri_profession"/>
                    </div>
                </div>
                 <div className="d-flex container gap-5">
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1" className="form-label fw-medium">Définir mot de passe</label>
                         <input type="password" className="form-control " required id="inscri_password" />
                    </div>
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1" className="form-label fw-medium">Confirmer votre mot de passe</label>
                         <input type="password" class="form-control " required id="inscri_confirmepass"/>
                         <small id="incorect_passsword"></small>
                    </div>
                </div>
                 <div className="d-flex container gap-5">
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1" className="form-label fw-medium">E-mail</label>
                         <input type="email" class="form-control " required id="inscri_email" />
                         <small id="small"></small>
                    </div>
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1" className="form-label fw-medium">Téléphone</label>
                         <input type="number" className="form-control " required id="inscri_telephone"/>
                         <small id="small1"></small>
                    </div>
                </div>
                 <div className="d-flex container gap-5">
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1" className="form-label fw-medium">Adresse</label>
                         <input type="text" className="form-control " required id="inscri_adress" />
                    </div>
                    <div className="mb-3 col-4">
                         <label for="exampleFormControlInput1" className="form-label fw-medium">Organisation</label>
                         <input type="text" className="form-control " required id="inscri_organe"/>
                    </div>
                </div>
                 <div className="text-center col-9 mt-3">
                    <button className="btn bouton col-6 "  id="btn_inscri" type="submit"><Link to="/" className ="liens">S'inscrire</Link ></button>
                    <p>Vous avez déja un compte,<Link to="/" class="text-decoration-none text-black fw-medium">Connectez-vous!</Link> </p>
                </div>
            </form>
                </div>
            </div>
        )
    }
}
export default Forminscri