import React from 'react';

const Expart = ({ expart }) => {
    const { name, img } = expart;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 gx-5 gy-5' >
            <div className="card " style={{ width: '18rem' }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
            </div>

        </div>
    );
};

export default Expart;