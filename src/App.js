import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/HomePage/Home";
import { EmployeeList } from "./Pages/EmployeeListPage/EmployeeList";
// Importation correcte de CreateEmployee
import CreateEmployee from "./Pages/CreateEmployeePage/CreateEmployee"; 
import { Error } from "./Pages/Error/Error";
import { MainNav } from "./Components/MainNavComp/MainNav";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistor } from "./store";
import "react-datetime-picker/dist/DateTimePicker.css";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Router>

						<Routes>
							<Route path="/" element={<CreateEmployee />} />
					
						</Routes>
					</Router>
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;