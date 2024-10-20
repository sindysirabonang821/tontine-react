import React, { Component } from 'react';
import Photoconnect from './Photoconnec';
import Formconnect from './Formconnec';
class Connection extends Component {
    render() {
      return (
        <div className='container-fluid '>
          <div className='row'>
            <div className='col col-sm-12 col-md-5'>
              <Photoconnect/>
            </div>
            <div className='col col-sm-12 col-md-7'>
              <Formconnect/>
            </div>
          </div>
  
        </div>
      );
    }
  }
  
  export default Connection;