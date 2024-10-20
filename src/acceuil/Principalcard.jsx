import React, { Component } from 'react';
import Card from './card';

class Pricipal extends Component{
    render() {
        return (
            <div className='container'>
                <div className="row">
                </div>
                <Card mois="Juin" somme={225.000} nombre={'nombre de cotisation'} isProgressBar={true} />
            </div>
        );
    }
}
export default Pricipal