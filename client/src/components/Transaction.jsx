import { useDispatch } from "react-redux";
import { deleteTransaction } from "../transactionsSlice";

const Transaction = ({transaction}) => {
    const {id, name, amount} = transaction;
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(deleteTransaction(id));
    }

    return (
        <li className={"transaction " + ((amount>0) ? "border-green" : "border-red")} >
            <button onClick={onClick}>X</button>
            <div>
                <span>{name}</span>
                <span>{(amount > 0) ? `+${amount}` : amount}</span>
            </div>
        </li>
    )
}

export default Transaction;