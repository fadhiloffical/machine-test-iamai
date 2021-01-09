import './App.css';
import React, { useState } from 'react';

function App() {

  const [experiencePoints, setExperiencePoints] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [finalEvenValues, setFinalEvenValues] = useState([]);
  const [showI, setShowI] = React.useState(true)

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

const Information = (e2) =>{
  e2.preventDefault();
  setShowI(!showI);
  console.log(showI)
}

let html;

if (showI === true) {
  html = (
    <div className="TestForm">
      
      <button className="Information" onClick={Information}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg></button>
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
  )
} else {
  html=(
    <div className="TestForm">
      <button className="Information" onClick={Information}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg></button>
      
    <div className="wrapper">
    <p>Q 1. If you are given an array of experience points for an army of N men.<br/>
    Identify how many of them belong to Marty's team and how many to Captain Chantel's army. <br/>
    </p>
    <p>
    Given :
    - Each member of Marty's team has even experience.<br/>
    - Members of Captain Chantel's team have an odd experience.<br/>
    </p>
    <p>
    Input Format<br/>
    It consists of 2 lines. <br/>
    The first line consists of a single integer N, denoting the total number of men. <br/>
    The next line comprises on N space-separated integers, each integer denoting the experience points of a single man.<br/>
    </p>
    <p>
    Output Format<br/>
    Output 2 lines.<br/>
    The first line comprises of space-separated integers denoting the experience points of every man in Marty's Force in the appropriate order.<br/>
    The next line comprises of space-separated integers denoting the experience points of every man in Captain Chantel's force in the appropriate order.<br/>
    </p>
    <p>
    Sample Input<br/>
      3 1 14 7 6 7 2
    </p>
    <p>
      Sample Output <br/>
      2 6 14 <br/>
      7 7 3 1
      </p>
    </div>
    </div>
  )
}
  return (
    <div className="App">
      
    {html}

    </div>
  );
}

export default App;
