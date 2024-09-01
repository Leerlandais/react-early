import Button from './Button';
function BtnHolder() {
    const changeColour = (colour) => {
        console.log(colour)
        document.body.style.backgroundColor = colour;
    };
    return (
        <div className="btnHolder">
            <Button btnName={"Blue"} onClick={() => changeColour("blue")}/> {/* Fix the prop name */}
            <Button btnName={"Green"} onClick={() => changeColour("green")}/>
            <Button btnName={"Red"} onClick={() => changeColour("red")}/>
            <Button btnName={"White"} onClick={() => changeColour("white")}/>
        </div>
    )
}

export default BtnHolder;