import React from 'react';
import {Link} from 'react-router-dom';
import '../Card/cards.styles.css';

function ExtraCards(props) {
  return (
     <section>
       <div className='col-sm-4 md-6 lg-10 offset-1'>
         <div className='container mt-5'>
           <div className="card item-card bg-light" key={props.id}>
             <h4 className="card-title text-center">{props.name}</h4>
             <img src={props.image} className='card-image-top'
                  alt="..."/>
             <div className="overlay">
               <div className="text">
                 <div className='text text-center'>Enjoy</div>
                 <div className='teleportation'>
                   <Link target='_blank' to={props.repository} rel='noopener noreferrer' as='button'
                         className='btn-lg btn-danger buttons'>Github Repo</Link>
                   <Link target='_blank' to={props.liveLink} rel='noopener noreferrer' as='button'
                         className='btn-lg btn-danger buttons'>Live App</Link>
                 </div>
               </div>
             </div>
             <p className="item-card-title my-3 text-muted cText">
               {props.technologies}
             </p>
             <p className="card-text cText">
               {props.description}
             </p>
           </div>
         </div>
       </div>
     </section>
  )
}

export default ExtraCards;
