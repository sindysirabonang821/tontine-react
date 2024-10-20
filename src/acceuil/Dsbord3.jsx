import React, { Component } from 'react';
import Progress1 from './progress1';
import Progress2 from './Progress2';
import './acceuil.css'
// import Progress2 from './progress2';

class Dasbord3 extends Component {
    render() {
        const membres = [
            { id: 1, membre: 'Selena Roy', montant: '25.000', date: '01-06-2022', statut: 'validé' },
            { id: 2, membre: 'Emma Watson', montant: '25.000', date: '01-06-2022', statut: 'en attente' },
            { id: 3, membre: 'Jhon Rober', montant: '25.000', date: '01-06-2022', statut: 'validé' },
            { id: 4, membre: 'Anne Hathaway', montant: '25.000', date: '01-06-2022', statut: 'en attente' },
            { id: 5, membre: 'Ravi Shankar', montant: '25.000', date: '01-06-2022', statut: 'validé' },
            { id: 6, membre: 'Emma Stone', montant: '25.000', date: '01-06-2022', statut: 'en attente' }

        ];
        const membr = [
            { id: 1, membre: 'Selena Roy', montant: '25.000', date: '01-06-2022', valu: 'validé' },
            { id: 2, membre: 'Emma Watson', montant: '25.000', date: '01-06-2022', valu: 'validé' },
            { id: 3, membre: 'Jhon Rober', montant: '25.000', date: '01-06-2022', valu: 'en attente' },
            { id: 4, membre: 'Anne Hathaway', montant: '25.000', date: '01-06-2022', valu: 'en attente' },
            { id: 5, membre: 'Ravi Shankar', montant: '25.000', date: '01-06-2022', valu: 'en attente' },
            { id: 6, membre: 'Emma Stone', montant: '25.000', date: '01-06-2022', valu: 'en attente' }

        ];

        return (
            <div className='container'>
                <div className='row mt-5 mx-auto  '>
                    <div className="col col-md-6 ">
                    <h3 className='mx-5'>Juin</h3>
                    <div className="table-responsive shadow  text-center">
                        <table className="table ">
                            <thead className='heade '>
                                <tr>
                                    <td className='entete'>Membre</td>
                                    <td className='entete'>Montant</td>
                                    <td className='entete'>Date</td>
                                    <td className='entete'>Statut</td>
                                </tr>
                            </thead>
                            <tbody>
                            {membres.map((membre) => (
                                <tr key={membre.id} className=''>
                                    <td>{membre.membre}</td>
                                    <td>{membre.montant}</td>
                                    <td>{membre.date}</td>
                                    <td className={membre.statut === 'validé' ? 'status-validé' : 'en-attente'}>
                                        {membre.statut}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* <div className='card shadow p-1'>
                        <div className='card-body'>
                            <div className="row heade text-center "> 
                            <div className="col-3">Membre</div>
                        <div className="col-3">Montant</div>
                        <div className="col-3">Date</div>
                        <div className="col-3">Statut</div>
                            </div>
                            {membres.map((membre) => (
                        <div key={membre.id} className="row text-center">
                            <div className="col-3 mt-3  text-nowrap">{membre.membre}</div>
                            <div className="col-3 mt-3 ">{membre.montant}</div>
                            <div className="col-3 mt-3 text-nowrap">{membre.date}</div>
                            <div className="col-3 mt-3 text-nowrap">  
                            <span className={membre.statut === 'validé' ? 'status-validé' : 'en attente'}>
                                                {membre.statut}
                                            </span>
                                 </div>
                        </div>
                    ))}
                        </div>
                    </div> */}
                    </div>

                    <div className="col col-md-6 mt-2">
                    <h5 className='mx-5'>Top progression</h5>

                    <div class="table-responsive shadow  text-center text-nowrap">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td className='entete'>Membre</td>
                                    <td className='entete text-nowrap'>Date de debut</td>
                                    <td className='entete'>Progression</td>
                                </tr>
                            </thead>
                            <tbody>
                            {membr.map((membre) => (
                                <tr key={membre.id}>
                                    <td>{membre.membre}</td>
                                    <td>{membre.date}</td>
                                    <td>
                                    {membre.valu === 'validé' ? <Progress1 /> : <Progress2 />}
                                    
                                     </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                        {/* <div className="card p-1">
                            <div className='card-body '>
                            <div className="row heade text-center "> 
                            <div className="col-3">Membre</div>
                        <div className="col-3">Montant</div>
                        <div className="col-3">Date</div>
                        <div className="col-3">Statut</div>
                            </div>
                            {membr.map((membre) => (
                                    <div key={membre.id} className="row text-center">
                                        <div className="col-3 mt-3  text-nowrap">{membre.membre}</div>
                                        <div className="col-3 mt-3">{membre.montant}</div>
                                        <div className="col-3 mt-3 text-nowrap">{membre.date}</div>
                                        <div className="col-3 mt-3">
                                        {membre.valu === 'validé' ? <Progress1 /> : <Progress2 />}

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        );
    }
}

export default Dasbord3;
