import Transaction from "./Transaction";
import { useSelector } from "react-redux";

const TransactionList = () => {
    let transactionList = useSelector(state => state.transactions.items);

    return (
        <div className="transaction-list">
            <h1>
                Transactions
            </h1>
            <ul>
                {transactionList.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList;