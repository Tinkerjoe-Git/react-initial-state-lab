// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component {
    state = {
        secondsLeft: this.props.initialCount
    }
    checkZero(){
        if(this.props.initialCount==0){
            return <p>Boom!</p>
        }
        else{
            return <p>{this.props.initialCount} seconds left before I go boom!</p>
        }
    }
    render() {
        return(
            this.checkZero()
        )
    }

}