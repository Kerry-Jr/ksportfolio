import React from 'react';

import './cards.styles.css';

function Card (props) {
    return (
        <div className="projects">

                    <div className="col-md-3 col-sm-6 item">
                        <div className="card item-card card-block">

                            <h4 className="card-title">{props.name}</h4>
                            <img src={props.image}
                                 alt="projects"/>
                                <h5 className="item-card-title mt-3 mb-3">{props.technologies}</h5>
                                <p className="card-text">{props.description}</p>

                        </div>
                    </div>

        </div>

    )
};

export default Card;