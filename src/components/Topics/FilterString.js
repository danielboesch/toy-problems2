import React, {Component} from 'react';

class FilterString extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unFilteredArray: ['Ohio', 'Mississippi', 'Utah', 'Oregon', 'Washington', 'Michigan', 'Georgia', 'New York', 'Montana', 'Oklahoma', 'Wisconsin', 'Florida', 'Alaska', 'Hawaii', 'Arkansas'],
            userInput: '',
            filteredArray: []
        }

    }
    handleChange(val){
        this.setState({ userInput: val })
    }

    handleClick(input){
        let names = this.state.unFilteredArray;
        let newArr=[];

            for (let i = 0; i < names.length; i++){
                if (names[i].includes(input)){
                    newArr.push(names[i])
                }
            }
        
        this.setState({ filteredArray: newArr })
     }
    

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.handleClick(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }

}

export default FilterString