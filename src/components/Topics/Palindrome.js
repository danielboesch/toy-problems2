import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            palindrome: ''
        }

    }

    handleChange(val){
        this.setState({userInput: val})
    }

    handleClick(input){
        let forwards = input;
        let backwards = input;

        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if(forwards === backwards){
            this.setState({palindrome: 'True'})
        } if (forwards != backwards){
            this.setState({palindrome: 'False'})

        }

    }


    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input
                onChange={(e) => this.handleChange(e.target.value)}
                className="inputLine">
                </input>
                <button
                onClick={() => this.handleClick(this.state.userInput)}
                className="confirmationButton">
                    Check
                </button>
                <span className="resultsBox">
                    Palindrome: {this.state.palindrome}
                </span>
            </div>
        )
    }
}

export default Palindrome