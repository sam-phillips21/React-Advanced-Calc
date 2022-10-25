import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

        state = {
            operator: '',
            num1: '',
            num2: '',
            result: '',
            convertedNum1: '',
            convertedNum2: false,
            value: ''
            // value: "event.target.innertext" 
        }
        clearState = () => {
            this.setState({ num1: '',
                num2: '',
                result: '',
            convertedNum2:false})
            
        }
        handleChange = (event) => {

            console.log(event.target.innerText)
            // this.setState({num1: this.state.num1 + event.target.innerText})
            // this.setState({operator: event.target.innerText})
            if (this.state.convertedNum2 === true) {
                
            this.setState({num2: this.state.num2 + event.target.innerText})
        
        }else{ 

            this.setState({num1: this.state.num1 + event.target.innerText})
        } 
          
            
            
        }

       

        math = (str) => {
            
            let convertedNum1 = parseInt(this.state.num1)
            let convertedNum2 = parseInt(this.state.num2)
            let operator = (this.state.operator)
           let result =  ''
            if (operator=== '+') {
               result =convertedNum1 + convertedNum2 
            } else if(operator==='-') {
                result = convertedNum1 - convertedNum2
            } else if(operator==='*') {
                result = convertedNum1 * convertedNum2
            } else if(operator==='/') {
                result = convertedNum1 / convertedNum2
            }
        
                
            
            this.setState ({result})
                
        
  
            
        }
        


render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">

                <p>Values: 
                    {this.state.result}
                </p>
               
                <div className="answer-box">{this.state.num1} <br /> {this.state.num2} </div>
                <p>
                     
                </p>

                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick= {this.clearState

                    }>AC</button>
                    <button className="calc-button calc-button-top" onClick= {(
                        console.log('+-')
                    )}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={() => {this.setState ({
                        operator: '/',
                        convertedNum2: true
                    })}}>%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={ this.handleChange}>7</button>
                    <button className="calc-button"onClick={ this.handleChange}>8</button>
                    <button className="calc-button"onClick={ this.handleChange}>9</button>
                    <button className="calc-button calc-button-op"onClick={() => {this.setState({
                        operator: '*',
                        convertedNum2: true
                    })}}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={ this.handleChange}>4</button>
                    <button className="calc-button"onClick={ this.handleChange}>5</button>
                    <button className="calc-button"onClick={ this.handleChange}>6</button>
                    <button className="calc-button calc-button-op"onClick={() =>{this.setState({
                        operator: '-',
                        convertedNum2: true
                    })}}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={ this.handleChange}>1</button>
                    <button className="calc-button"onClick={ this.handleChange}>2</button>
                    <button className="calc-button"onClick={ this.handleChange}>3</button>
                    <button className="calc-button calc-button-op"onClick={() => {this.setState({
                        operator: '+',
                        convertedNum2: true
                    })}}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"onClick={ this.handleChange}>0</button>
                    <button className="calc-button"onClick={() =>{this.handleChange({
                        value: '.'})}}
                        
                        >.</button>
                    <button className="calc-button calc-button-op"onClick={this.math}>=</button>
                    
                </div>
            </div>
        </div>
    )
}
}

export default Calculator