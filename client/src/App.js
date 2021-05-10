import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import './App.css';
import { useSelector } from "react-redux";

function App() {
  let transactions = useSelector(state => state.transactions.items);
  
  let balance = transactions.reduce((sum,t) => sum + t.amount, 0);
  let incomeValues = transactions.map( t => (t.amount>=0) ? t.amount : 0);
  let income = incomeValues.reduce((sum,iV) => sum + iV, 0);
  let expense = (balance >= 0) ? (income-balance) : (income+Math.abs(balance));

  return (
    <div className="app-container">
      <div className="first">
        <div className="header">
          <Header />
        </div>
        <div className="balance-income-expense">
          <Balance balance={balance} />
          <IncomeExpense income={income} expense={expense} />
        </div>
      </div>
      <div className="second">
        <TransactionList />
      </div>
      <div className="third">
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
