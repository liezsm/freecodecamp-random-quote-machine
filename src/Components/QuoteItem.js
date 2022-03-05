import React from 'react'

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function QuoteItem( props) {
    // console.log(props)
    const {quote, author, color } = props.data;
    const styles  ={
        color: color
    }
    // console.log(quote)
  return (
    <div id='quote-and-author-container'>
        <div className="quote-item">
        <FontAwesomeIcon icon={faQuoteLeft} className="icon" style={ styles}/>
       
        <p id='text'  style={styles}>{quote}</p>
        </div>
        <small id='author'  style={styles}>-{author} </small>
    </div>
  )
}

export default QuoteItem