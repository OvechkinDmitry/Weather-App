import React from 'react';
import './modal.css'

export const Modal = ({active,setActive,children}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
               <div className='modal__content'>
                   {children}
               </div>
        </div>
    );
};
