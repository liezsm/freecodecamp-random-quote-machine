import React from 'react'


//get fontawesome icons
import { faTwitter, faTumblr} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 function ButtonsContainer( props) {
// console.log(props)
const { color} = props.data;
  return (
    <div className='btn-wrapper'>
    <div className="retweet-wrapper">
       <a href="https://twitter.com/intent/tweet" id='tweet-quote' 
       className='social-links' style={{backgroundColor: color}} >
           <FontAwesomeIcon icon={faTwitter} /></a>

       <a href="https://twitter.com/intent/tweet" id='tweet-quote'  style={{backgroundColor: color }}
       className='social-links'
       target="_top"
       >
           <FontAwesomeIcon icon={faTumblr} /></a>
    </div>

    <button id='new-quote' style={{backgroundColor: color}} onClick={props.newQuote}>New Quote</button>
    </div>
  )
}

export default ButtonsContainer