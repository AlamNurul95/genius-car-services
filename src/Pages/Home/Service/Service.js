import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const handleButton = id => {
        navigate(`/service/${id}`)


    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price:{price}</h5>
            <p>{description}</p>
            <button onClick={() => handleButton(id)}>Book</button>


        </div>
    );
};

export default Service;