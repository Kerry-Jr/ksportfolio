import React from 'react';

import './cards.styles.css';

function Card (props) {
    return (
        <div style={{height: '500px', width: '500px'}}>
            <div className='card-body'>
                <div className="row">
                    <div className="col-md-3 col-sm-6 item">
                        <div className="card item-card card-block">
                            <h4 className="card-title text-right"><i className="material-icons">{props.name}</i></h4>
                            <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg"
                                 alt="screenshot" />
                            <h5 className="item-card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
                            <p className="card-text">This is a company that builds websites, web apps and e-commerce
                                solutions.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;