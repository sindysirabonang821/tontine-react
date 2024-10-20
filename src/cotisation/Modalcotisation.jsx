import React, { Component } from "react";

class Modalcotisation extends Component{
    render(){
        const membres = [
            { id: 1, membre: 'Selena Roy', date: '01/01/2022',fin:'31-12-2022', montant: '300.000', statut: 'términé',  action: 'términé' },
            { id: 2, membre: 'Emma Watson', date: '01/01/2022',fin:'31-12-2022',  montant: '300.000', statut: 'términé',  action: 'términé' },
            { id: 3, membre: 'Jhon Rober', date: '01/01/2022',fin:'31-12-2022',  montant: '300.000', statut: 'términé', action: 'términé' },
            { id: 4, membre: 'Anne Hathaway', date: '01/01/2022',fin:'31-12-2022',  montant: '300.000', statut: 'términé',  action: 'términé' }, // Correction ici
            { id: 5, membre: 'Ravi Shankar', date: '01/01/2022',fin:'31-12-2022',  montant: '300.000', statut: 'términé',  action: 'términé' },
            { id: 6, membre: 'Emma Stone', date: '01/01/2022',fin:'31-12-2022',  montant: '300.000', statut: 'términé',  action: 'términé' }
        ];
        return(
            <div className="container">
                <div className="row mt-5">
                {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body  p-5">
      <table class="table  shadow text-center">
                    <thead className=''>
                        <tr>
                            <td className='entet'>Membre</td>
                            <td className='entet'>Date de début</td>
                            <td className='entet'>Date de fin</td>
                            <td className='entet'>Montant total cotisé </td>
                            <td className='entet'>Statut</td>
                            <td className='entet'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {membres.map((membre) => (
                                <tr key={membre.id} className=''>
                                    <td>{membre.membre}</td>
                                    <td>{membre.date}</td>
                                    <td>{membre.fin}</td>
                                    <td>{membre.montant}</td>
                                    <td className={membre.statut === 'términé' ? 'status-validé' : 'en attente'}>{membre.statut}</td>
                                    {/* <td>{membre.date}</td> */}
                                    <td className='d-flex align-items-center justify-content-center'>
                                        <div></div>
                                    <i class="fa-solid fa-eye"></i>
                                        {/* {membre.action} */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                 </table>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div> */}
    </div>
  </div>
</div>
                </div>
            </div>
        )
    }
}
export default Modalcotisation