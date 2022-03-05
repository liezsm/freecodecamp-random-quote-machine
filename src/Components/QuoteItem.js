import React from 'react'

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function QuoteItem() {
  return (
    <div id='quote-and-author-container'>
        <div className="quote-item">
        <FontAwesomeIcon icon={faQuoteLeft} className="icon flipcolortext" />
       
        <p id='text' className='flipcolortext'>Memento Mori</p>
        </div>
        <small id='author' className='flipcolortext'>- George Addair</small>
    </div>
  )
}

export default QuoteItem