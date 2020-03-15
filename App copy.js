import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

//Class based component
class App extends Component {
  //Special property
  state = {
    persons: [
        {name:'A',age:10},
        {name:'B',age:20},
        {name:'C',age:30}
    ]
  }

  testfunction = () => {
    //console.log("Testing");
    this.setState({
        persons: [
          {name:'D',age:20},
          {name:'E',age:20},
          {name:'F',age:20}
        ]
      }
    )
  }

  render(){
    return (
      <div className="App">
        <h1>This is a React Component</h1>
        <button onClick={this.testfunction}>TestButton</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Inner Content</Person>        
      </div>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'This is a React Component !!!'))
  }  
}

export default App;
