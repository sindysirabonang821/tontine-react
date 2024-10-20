import React, { Component } from 'react';

class Progress2 extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col mt-2">
                    <div className="progress largeure" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                              <div className='progress-bar pro2' >
                    </div>
                              </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Progress2