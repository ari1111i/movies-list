import { useState } from 'react';
import './App.css';
import  NewExpense  from './components/NewExpense';


function App() {
  const [setExpenses] = useState([]);

	const addNewExpenseHandler = (newExpense = {}) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, newExpense]
		})
	}

  return (
    <div className="App">

      <NewExpense onAddNewExpense={addNewExpenseHandler}/>
    </div>
  ) 
}

export default App;

