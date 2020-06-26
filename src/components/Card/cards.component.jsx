import React from 'react';

import './cards.styles.css';

function Card (props) {
    return (
        <div className="projects">
                    <a href={props.liveLink}>
                    <div className="item">
                        <div className="card bg-light item-card">

                            <h4 className="card-title">{props.name}</h4>
                            <img src={props.image} alt="projects"/>
                                <h5 className="item-card-title mt-3 mb-3">{props.technologies}</h5>
                                <p className="card-text">{props.description}</p>
                                    <a href={props.repository}><button className='btn btn-primary'                                                   type='button'>Github Repository</button></a>

                        </div>
                    </div>
                    </a>
        </div>

    )
};

export default Card;