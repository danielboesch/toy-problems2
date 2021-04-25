import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(props) {
        super(props);
        this.state= {
            unFilteredArray: [{
                fish: 'sushi',
                type: 'salmon',
                side: 'soy sauce',

            }, {
                pizza: 'chicken',
                sauce: 'buffalo',
                cheese: 'mozzerella',

            }, {
                pizza: 'BBQ',
                drink: 'root beer',
                side: 'bread sticks',

            }, {
                fish: 'poke bowl',
                type: 'tuna',
                sauce: 'sriracha',

            },],
            userInput: '',
            filteredArray: [],
        }

    }

    changingState(val){
        this.setState({userInput: val})
    }



    handleChange(input){
        let newArr = [];
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            for (let key in this.state.unFilteredArray[i]){
                if(key === input){
                    newArr.push(this.state.unFilteredArray[i])
                }
            }
        }
       this.setState({filteredArray: newArr})
    }


    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>
                    Original: {JSON.stringify(this.state.unFilteredArray)}
                </span>

                <input
                className='inputLine'
                onChange={(e) => this.changingState(e.target.value)}>
                </input>

                <button 
                onClick={() => this.handleChange(this.state.userInput)}
                className='confirmationButton'>
                    Filter
                </button>
                <span className='resultsBox filterObjectRB'>
                Filtered: {JSON.stringify(this.state.filteredArray)}


                </span>
            </div>
        )
    }
}

export default FilterObject