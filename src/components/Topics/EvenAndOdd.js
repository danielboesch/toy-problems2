import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

    }

    updateInputChange(val){
        this.setState({userInput: val});
    }
    handleOnClick(input){
        let arr = input.split(',');
        let evens = [];
        let odds = [];


        for (let i = 0; i < arr.length; i++){ 
            if(arr[i] % 2 === 0){
                evens.push(arr[i]);
            }if(arr[i] % 2 != 0 && arr[i] != ','){
                odds.push(arr[i]);
            }
            this.setState({evenArray: evens})
            this.setState({oddArray: odds})
        }
    }


    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens And Odds</h4>
                <input
                onChange={ (e) => this.updateInputChange(e.target.value)}
                className ='inputLine'>

                </input>
                <button 
                onClick={() => this.handleOnClick(this.state.userInput)} 
                className ='confirmationButton'>
                    Split
                </button>
                <span
                className='resultsBox'>
                    Evens: {JSON.stringify(this.state.evenArray)} 
                </span>
                <span className='resultsBox'>
                    Odds: {JSON.stringify(this.state.oddArray)}
                </span>
            </div>
        )
    }
}

export default EvenAndOdd