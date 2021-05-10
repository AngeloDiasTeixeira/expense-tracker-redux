const IncomeExpense = ({income,expense}) => {
    return (
        <div className="income-expense">
            <div className="income">
                <p>income</p>
                <p>${income}</p>
            </div>
            <div className="expense">
                <p>expense</p>
                <p>${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense;