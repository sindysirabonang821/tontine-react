import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Conexion.css';

class Formconnect extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <h1 className='text-center texte'>Bienvenue sur Bakéli-tontine</h1>
                    
                    <div className="row mb-3 w-50 mx-auto">
                        <h3 className='mt-5 texte'>Connectez-vous</h3>
                        <p className='mt-3'>Connectez-vous et gérez vos cotisations</p>
                        <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="N° téléphone" />
                        <input type="password" className="form-control mt-3" id="colFormLabel" placeholder="Mot de passe" />
                        <Link className='mt-3 d-flex justify-content-end mx-2 liens' to="#">Mot de passe oublié?</Link>
                        <button type="submit" className="btn bouton mt-2 no-wrap"> <Link to="/acceuil" className='liens' >Connexion</Link></button>
                        <p className='mt-3  mx-2 texte'>Vous n'avez pas de compte, <Link to="/inscription" className='fw-bold lien'>inscrivez-vous!</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Formconnect;
