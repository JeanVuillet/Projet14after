
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { EmployeeList } from './Pages/EmployeeList/EmployeeList';
import { CreateEmployee } from './Pages/CreateEmployee/CreateEmployee';
import { MainNav } from './Components/MainNav';

function App() {
  return (
    <>
    <Router>
      <MainNav/>
      <Routes>
        <Route to='./' Component={<Home/>}/>
        <Route to ='./createEmployee' Component={<CreateEmployee/>}/>
        <Route to='./employeeList' Component={<EmployeeList/>}/>
      </Routes>
    </Router>
    <div className="App">
      
    </div>
    </>
  );
}

export default App;
