import React from 'react';


import './cards.styles.css';

function Card (props) {

    return (
        <div className='col-sm-4 md-6 lg-10 offset-1'>

                    <div className='container'>
                        <div className="card item-card bg-light" key={props.id}>
                            <h4 className="card-title text-center">{props.name}</h4>
                            <img src={props.image} className='card-image-top'
                                 alt="..."/>
                            <h5 className="item-card-title my-3 text-muted">
                                {props.technologies}
                            </h5>
                            <p className="card-text">
                                {props.description}
                            </p>
                        </div>
                    </div>
        </div>

    )
}

export default Card;