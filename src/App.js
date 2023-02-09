import "./App.css";
import Count from "./components/Count";
import First from "./components/First";
import Next from "./components/Next";
import NextCount from "./components/NextCount";
import Service from "./components/Service";
import User from "./components/User";

const App = () => {
  const fName = "Adri";
  const year = 2023;
  const birthYear = 2019;
  const startSchool = false;
  return (
    <div className="App">
      <h2>My name is {fName}</h2>
      <hr />
      <h2> I'm {year - birthYear} years old.</h2>
      <h2>{startSchool ? "Starts Her School" : "Not Starts Her School"}</h2>
      <hr />
      <First />
      <hr />
      <Next />
      <hr />
      <User userName={"Adri"} userId={"01"} />
      <hr />
      <User userName={"Amit"} userId={"02"} />
      <hr />
      <Service sName={"Web Development"} />
      <hr />
      <Service sName={"UI/US Design"} />
      <hr />
      <Count />
      <hr />
      <NextCount />
    </div>
  );
};

export default App;
