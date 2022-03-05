import React from 'react'

import QuoteItem from './QuoteItem';
import ButtonsContainer from './ButtonsContainer';

// // get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Quotebox extends React.Component {

    constructor(props){
        super(props)

    }

   

    handleClick = () => {
         function randomize(){
            let hexColor= '#';
          const hex =[0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'F'];
        
        for(let i =0; i < 6; i++){
           const randomColorNumber = Math.floor(Math.random() * hex.length)
           hexColor+=hex[randomColorNumber]
       }
       return hexColor;
    }
        ( async() => {      
            console.log('clicked!')
    try {

        const quotes = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        const data = await quotes.json()
      
        // const { id, advice} = data.slip;

       console.log(data.quotes)
       console.log(data.quotes.length)
       const random = Math.floor( Math.random() * data.quotes.length)
       console.log(random)
       console.log(data.quotes[random])

       document.getElementById('text').innerText = `${data.quotes[random].quote}`
    //    console.log(id, advice)

        
    }catch(err){
        console.log(err)
    }
        })();
        const randomColor =  randomize();
       document.querySelector('body').style.backgroundColor = randomColor;
      const bgtoChange = document.querySelectorAll('.colorflip')
        bgtoChange.forEach( i => {
            i.style.backgroundColor = randomColor
        })
       const colortoChange = document.querySelectorAll('.flipcolortext');
       colortoChange.forEach( i => i.style.color = randomColor)
    }
   

    render(){

        return (
            <div id="quote-box">
               
                < QuoteItem />
                <ButtonsContainer newQuote ={this.handleClick} />
              
            </div>
        )
    }
}

export default Quotebox;