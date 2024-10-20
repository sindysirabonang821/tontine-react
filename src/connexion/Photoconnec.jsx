import React, { Component } from 'react';
import image from '../assets/image.png'
import Image from './Propsimg';
import './conexion.css';
class Photoconnect extends Component{
    render(){
        return(
            
            <div className=' p-5 rounded-end-5   shadow-5  photo'>
                 <Image src={image} alt="Description de l'image"/>
            </div>
        )
    }
}
export default Photoconnect