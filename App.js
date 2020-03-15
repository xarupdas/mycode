import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person';

//Using react hook useState
//Class based component
const App = props => {
  //Special property
  const [PersonState,setPersonState] = useState({
    persons: [
        {name:'A',age:10},
        {name:'B',age:20},
        {name:'C',age:30}
    ]
  })

  const testfunction = () => {
    //console.log("Testing");
    setPersonState({
        persons: [
          {name:'D',age:20},
          {name:'E',age:20},
          {name:'F',age:20}
        ]
      }
    )
  }

  return(
    <div className="App">
      <h1>This is a React Component</h1>
      <button onClick={testfunction}>TestButton</button>
      <Person name={PersonState.persons[0].name} age={PersonState.persons[0].age}/>
      <Person name={PersonState.persons[1].name} age={PersonState.persons[1].age}/>
      <Person name={PersonState.persons[2].name} age={PersonState.persons[2].age}>Inner Content</Person>        
    </div>
  );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'This is a React Component !!!'))
  
}

export default App;
