import './App.css';
import React, { useState } from 'react';

function App() {

  const [experiencePoints, setExperiencePoints] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const [finalEvenValues, setFinalEvenValues] = useState([]);

  const addExperiencePoint = (e) =>{
    e.preventDefault();
    if (searchTerm.length === 0) {
      alert("Please enter experience")
    }
    else{
      setExperiencePoints([ ...experiencePoints, {
          id: experiencePoints.length,
          value: searchTerm
      } ])
      setSearchTerm("")
    }
  }

  const handleChange = event => {
      setSearchTerm(event.target.value);
  };
  
  let result;
const FinalResult = (e1) =>{
  e1.preventDefault();
  setFinalEvenValues(experiencePoints);

  setExperiencePoints('');

}

if (finalEvenValues.length > 0) {
  result = (
    <>
    <div className="Result">
      <h3>Result</h3>
          <p>
          {finalEvenValues.filter(finalEvenValues => finalEvenValues.value %2 == 0).map(filteredfinalEvenValues => (
            <>{filteredfinalEvenValues.value} &nbsp;</>
          ))}
          </p>

          <p>
          {finalEvenValues.filter(finalEvenValues => finalEvenValues.value %2 != 0).map(filteredfinalEvenValues => (
            <>{filteredfinalEvenValues.value} &nbsp;</>
          ))}
          </p>
    </div>
    </>
  )
}


  return (
    <div className="App">
      <div className="TestForm">
        
      <form onSubmit={addExperiencePoint}>
          <input type="number"
              placeholder="Experience Point"
              value={searchTerm}
              onChange={handleChange} 
              /><br/><br/>

          <div className="Buttons">
            <button type="submit">ADD Experience Points</button>
            <button onClick={FinalResult}>Submit</button>
          </div>
          </form>

          {result}

      </div>

    </div>
  );
}

export default App;
