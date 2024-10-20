import React, { Component } from 'react';
import Savings from '../assets/Savings.png'
import Image from '../connexion/Propsimg';
class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { mois, somme, nombre, isProgressBar}=this.props
        return(
            <div className="container">
                <div className="row p-4 cart">
                {/* <div className='col mt-5'>
                <div className="card shadow">
                <div className="card-body ">
                              <h5 className="card-title"></h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary">{mois}</h6>
                              <h3 className="card-text fw-bold">{somme}</h3>
                              <h6 className="card-subtitle mb-2 text-body-secondary">
                              {nombre}
                            </h6>
                            </div>
                </div>
                </div> */}
                {/* <div className='col mt-5'>
                <div className="card shadow">
                <div className="card-body ">
                              <h5 className="card-title"></h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary">{mois}</h6>
                              <h3 className="card-text fw-bold">{somme}</h3>
                              <h6 className="card-subtitle mb-2 text-body-secondary">
                              {nombre}
                            </h6>
                            </div>
                </div>
                </div> */}
                <div className=' mt-5'>
                <div className="card shadow">
                <div className="card-body d-flex justify-content-center ">
                    {isProgressBar &&(
                                            <div>
                                            <img src={Savings} className='Ima'/>
                                        </div>
                    )}

                    <div>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{mois}</h6>
                              <p className="card-text fw-bold"> <span className='text-body-secondary'>{somme}</span>{somme}</p>
                              {isProgressBar && (
                                  <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                  <div className='progress-bar' >
                                        </div>
                                     </div>
                                 )}
                              </div>
                            </div>
                </div>
                </div>
                </div>


            </div>
        )
    }

}
export default Card