import React from 'react'


//get fontawesome icons
import { faTwitter, faTumblr} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 function ButtonsContainer(props) {

  return (
    <div className='btn-wrapper'>

    <div className="retweet-wrapper">
       <a href="https://twitter.com/intent/tweet" id='tweet-quote' 
       className='social-links colorflip'>
           <FontAwesomeIcon icon={faTwitter} /></a>

       <a href="https://twitter.com/intent/tweet" id='tweet-quote' 
       className='social-links colorflip'
       target="_top"
       >
           <FontAwesomeIcon icon={faTumblr} /></a>
    </div>

    <button id='new-quote' className='colorflip' onClick={props.newQuote}>New Quote</button>
    </div>
  )
}

export default ButtonsContainer