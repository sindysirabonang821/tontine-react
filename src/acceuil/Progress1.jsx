import React, { Component } from 'react';

class Progress1 extends Component{
    render(){
        return(
            <div className="container">
                <div className="row mt-2">
                    <div className="col ">
                    <div className="progress largeure" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                              <div className='progress-bar barte' ></div>
                              </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Progress1