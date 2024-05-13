
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/HomePage/Home';
import { EmployeeList } from './Pages/EmployeeListPage/EmployeeList';
import { CreateEmployee } from './Pages/CreateEmployeePage/CreateEmployee';
import { MainNav } from './Components/MainNavComp/MainNav';

function App() {
  return (
    <>
    <Router>
      <MainNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/createEmployee' element={<CreateEmployee/>}/>
        <Route path='/employeeList' element={<EmployeeList/>}/>
      </Routes>
    </Router>
    <div className="App">
      
    </div>
    </>
  );
}

export default App;
