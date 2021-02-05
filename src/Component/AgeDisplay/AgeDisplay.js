import { Component } from "react";
import './AgeDisplay.css'

class AgeDisplay extends Component{
    render (){
        return (
            <div className = 'AgeDisplay' >
                <h4>Age : {this.props.value}</h4>
            </div>
        );
    }
}

export default AgeDisplay;