const Balance = ({balance}) => {
    return (
        <div style={{marginTop: "-50px"}}>
            <h2>Your balance</h2>
            <h1 className={(balance >= 0) ? "green" : "red"}>${balance}</h1>
        </div>
    )
}

export default Balance;