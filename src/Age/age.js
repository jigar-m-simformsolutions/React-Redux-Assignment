import { Component } from "react";
import { connect } from 'react-redux';
import AgeDisplay from '../Component/AgeDisplay/AgeDisplay'
import AgeControl from '../Component/AgeControl/AgeControl'
import actionType from "../Actions";
import './Age.css'
import { act } from "react-dom/test-utils";

class Age extends Component {
    render(){
        return(
            <div>
                <AgeDisplay value = {this.props.age} />        
                <AgeControl lable = 'Age Up' clicked = {this.props.OnAgeUp}/>
                <AgeControl lable = 'Age Down' clicked = {this.props.OnAgeDown}/>
                <AgeControl lable = 'Add Age' clicked = {this.props.onAddAge}/>
                <AgeControl lable = 'Your Name' clicked = {this.props.OnNameEnter} />
                    <h4>Name :
                        {
                            this.props.confirmName === true ? this.props.User_Name : null
                        } 
                    </h4>
                <div className= 'row'> 
                    {
                        this.props.storedResult.map(result => (
                            <div key= {result.id} className = 'AddAge' onClick = {() => this.props.onDeleteAge(result.id)}>
                                {result.value}
                            </div>
                        ))
                    }
                </div>
                <span>A : </span>
                <span>{this.props.a}</span>
                <AgeControl lable = 'Update A' clicked = {() => this.props.onUpdateA(this.props.b)}/>
                <span>B : </span>
                <span>{this.props.b}</span>
                <AgeControl lable = 'Update B' clicked = {() => this.props.onUpdateB(this.props.a)}/>
                <AgeControl lable = 'Even Age' clicked = {this.props.onEvenAge} />
                <AgeControl lable = 'Odd Age' clicked = {this.props.onOddAge} />
                <h4>Even Age :</h4>
                <div className= 'row'> 
                    {
                        this.props.EvenAgeResult.map(result => (
                            <div key= {result.id} className = 'AddAge'>
                                {result.value}
                            </div>
                        ))
                    }
                </div>
                <h4>Odd Age :</h4>
                <div className= 'row'> 
                    {
                        this.props.OddAgeResult.map(result => (
                            <div key= {result.id} className = 'AddAge'>
                                {result.value}
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProp = state => {
    return {
      age : state.reducer.age,
      a : state.rA.a,
      b : state.rB.b,
      storedResult : state.reducer.result,
      EvenAgeResult : state.reducer.EvenAge,
      OddAgeResult : state.reducer.OddAge,
      User_Name : state.reducer.Name, 
      confirmName : state.reducer.confirmName
    }
  }
  
const mapDispatchToProps = dispatchEvent => {
    return {
        onUpdateA : (b) => dispatchEvent({type : actionType.UpdateA , b : b}),
        onUpdateB : (a) => dispatchEvent({type : actionType.UpdateB , a : a}),
        OnNameEnter : () => dispatchEvent({type : actionType.NameEnter}),
        OnAgeUp : () => dispatchEvent({type : actionType.AgeUp}),
        OnAgeDown : () => dispatchEvent({type : actionType.AgeDown}),
        onAddAge : () => dispatchEvent({type : actionType.AddAge}),
        onDeleteAge : (id) => dispatchEvent({type : actionType.DeleteAge,DltId : id}),
        onEvenAge : () => dispatchEvent({type : actionType.EvenAge}),
        onOddAge : () => dispatchEvent({type : actionType.OddAge}),
    }
  }

  export default connect(mapStateToProp,mapDispatchToProps)(Age);