function Button({btnName, onClick}) {
    return(
        <button className="myButton" onClick={onClick}>{btnName}</button>
    );
}

export default Button;

