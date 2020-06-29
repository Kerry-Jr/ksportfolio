import React from 'react';
import { Link } from 'react-router-dom';

import './cards.styles.css';

function Card (props) {

    return (
        <div className='col-sm-4 md-6 lg-10 offset-1'>

                    <div className='container mt-5'>
                        <div className="card item-card bg-light" key={props.id}>
                            <h4 className="card-title text-center">{props.name}</h4>
                            <img src={props.image} className='card-image-top'
                                 alt="..."/>
                            <p className="item-card-title my-3 text-muted cText">
                                {props.technologies}
                            </p>
                            <p className="card-text cText">
                                {props.description}
                            </p>
                            <div className='teleportation'>
                                <Link target='_blank' to={props.repository} rel='noopener noreferrer' as='button' className='btn-sm btn-danger buttons'>Github Repo</Link>
                                <Link target='_blank' to={props.liveLink} rel='noopener noreferrer' as='button' className='btn-sm btn-danger buttons'>Live App</Link>
                            </div>


                        </div>
                    </div>
        </div>

    )
}

export default Card;