import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../transactionsSlice";

const AddTransaction = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();


    const onSubmit = async e => {
        e.preventDefault();

        let newTransaction = {
            id: Math.random()*1000, name: name, amount: +amount
        };

        dispatch(addTransaction(newTransaction));

        setName("");
        setAmount("");
    }

    return (
        <div className="add-transaction">
            <h1>
                Add Transaction
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-name">
                    <label htmlFor="name">Transaction name:</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-amount">
                    <label htmlFor="amount">Transaction amount:</label>
                    <input type="number" id="amount" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <div className="form-button">
                    <button type="submit" disabled={name=="" || amount==0}>Add transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction;