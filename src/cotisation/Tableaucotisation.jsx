import React, { Component } from 'react';

class Cotisation2 extends Component{
    render(){
        const membres = [
            { id: 1, membre: 'Selena Roy', date: '01/01/2022', montant: '200.000', restant: '100.000',  action: 'términé' },
            { id: 2, membre: 'Emma Watson', date: '01/01/2022', montant: '200.000', restant: '100.000',  action: 'términé' },
            { id: 3, membre: 'Jhon Rober', date: '01/01/2022', montant: '200.000', restant: '100.000', action: 'términé' },
            { id: 4, membre: 'Anne Hathaway', date: '01/01/2022', montant: '200.000', restant: '100.000',  action: 'términé' }, // Correction ici
            { id: 5, membre: 'Ravi Shankar', date: '01/01/2022', montant: '200.000', restant: '100.000',  action: 'términé' },
            { id: 6, membre: 'Emma Stone', date: '01/01/2022', montant: '200.000', restant: '100.000',  action: 'términé' }
        ];
        return(
            <div className="container">
            <div className="row mx-5 mt-5">

            <div class="table-responsive shadow  text-center text-nowrap mx-4">
                <table class="table ">
                    <thead className='entete heade'>
                        <tr>
                            <td className='entete'>Membre</td>
                            <td className='entete'>Date de début</td>
                            <td className='entete'>Montant cotisé </td>
                            <td className='entete'>Montant réstant</td>
                            <td className='entete'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {membres.map((membre) => (
                                <tr key={membre.id} className=''>
                                    <td>{membre.membre}</td>
                                    <td>{membre.date}</td>
                                    <td>{membre.montant}</td>
                                    <td>{membre.restant }</td>
                                    <td className='d-flex align-items-center justify-content-center'>
                                        <div></div>
                                    <i className="fa-solid fa-eye "></i>
                                        {/* {membre.action} */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                 </table>
            </div>

                {/* <div className="card shadow">
                    <div className="card-body">
                        <div className="row heade text-center">
                            <div className="col-2">Membre</div>
                            <div className="col-2">Date de début</div>
                            <div className="col-2">Montant cotisé </div>
                            <div className="col-2">Montant réstant</div>
                            <div className="col-2">Action</div>
                        </div>
                        {membres.map((membre) => (
                            <div key={membre.id} className="row text-center">
                                <div className="col-2 mt-3 text-nowrap">{membre.membre}</div>
                                <div className="col-2 mt-3">{membre.date}</div>
                                <div className="col-2 mt-3">{membre.montant}</div>
                                <div className="col-2 mt-3 text-nowrap">
                                    {membre.restant }
                                    
                                </div>
                                <div className="col-2 mt-3">{membre.action}</div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
        )
    }
}
export default Cotisation2