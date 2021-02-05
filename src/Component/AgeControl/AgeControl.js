import { Component } from "react";
import './AgeControl.css'

class AgeControl extends Component{
    render (){
        return(
            <div className = 'AgeControl' onClick = {this.props.clicked}>
                {this.props.lable}
            </div>
        );
    }
}

export default AgeControl;