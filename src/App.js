import logo from './logo.svg';
import './App.css';
import studentsdata from './studentData';
import Student from './studentData'

function App() {
  const students = studentsdata.map((ele, index) => {
    return(
      <Student
        name={ele.name}
        bio={ele.bio}
        scores={ele.scores}
        key={index}
      />
    )
  })
  
  return (
    <div className="App">
      {students}
    </div>
  );
}

export default App;
