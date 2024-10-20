import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Remplacer Switch par Routes
import './App.css';
import Connection from './connexion/Connexion';
import Inscription from './inscription/Inscription'
import Acceuil from './acceuil/acceuil';
import Utilisateur from './utilisateur/utilisateur';
import Cotisation from './cotisation/Cotisation';
import Parametre from './parametre/Parametre';
import Generalparam from './parametre/Parametregeneraux';
import Parautilisateur from './parametre/Parametreutilisateur';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Connection />} />
          <Route path="/inscription" element={<Inscription />} /> 
          <Route path="/acceuil" element={<Acceuil />} /> 
          <Route path="/utilisateur" element={<Utilisateur />} /> 
          <Route path="/cotisation" element={<Cotisation />} /> 
          <Route path="/Parametre" element={< Parametre />} /> 
          <Route path="/Parametregeneraux" element={< Generalparam />} /> 
          <Route path="/Parametreutilisateur" element={< Parautilisateur/>} /> 


        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
