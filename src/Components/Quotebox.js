import React from 'react'

import QuoteItem from './QuoteItem';
import ButtonsContainer from './ButtonsContainer';

// // get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Quotebox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color:"",
            quote: 'Mementori Mori',
            author: 'Stoic'
        }

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
            // console.log('clicked!')
    try {

        const quotes = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        const data = await quotes.json()
      
    //    console.log(data.quotes.length)
       const random = Math.floor( Math.random() * data.quotes.length)
    //    console.log(data.quotes[random])
        const {quote, author} = data.quotes[random]
    //    document.getElementById('text').innerText = `${quote}`
    //    document.getElementById('author').innerText = `${author}`
    this.setState( prevState => {
        return {
            ...prevState,
            quote: quote,
            author: author
        }
    })
        
    }catch(err){
        console.log(err)
    }
        })();
        const randomColor =  randomize();
        this.setState({ color: randomColor})
        document.querySelector('body').style.backgroundColor = randomColor;
        
    //   const bgtoChange = document.querySelectorAll('.colorflip')
    //     bgtoChange.forEach( i => {
    //         i.style.backgroundColor = randomColor
    //     })
    //    const colortoChange = document.querySelectorAll('.flipcolortext');
    //    colortoChange.forEach( i => i.style.color = randomColor)
    }
   

    render(){

        // console.log(this.state)
        return (
            <div id="quote-box">
               
                < QuoteItem data ={this.state} />
                <ButtonsContainer newQuote ={this.handleClick} data = {this.state} />
              
            </div>
        )
    }
}

export default Quotebox;