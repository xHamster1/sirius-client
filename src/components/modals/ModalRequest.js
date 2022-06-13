import React from 'react'

import './ModalRequest.css'

const ModalRequest = ({active, setActive, children}) => {
  return (
    <div className={active ? "modalme active" : "modalme"} onClick={() => setActive(false)}>
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default ModalRequest