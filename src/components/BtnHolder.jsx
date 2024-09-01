import Button from './Button';
function BtnHolder() {
        const changeColour = (colour) => {
        console.log(colour)
            const btnHolder = document.querySelector(`.btnHolder`);
       btnHolder.style.backgroundColor = colour;
    };
    return (
        <div className="btnHolder">
            <Button btnName={"Blue"} onClick={() => changeColour("blue")}/> {/* Fix the prop name */}
            <Button btnName={"Green"} onClick={() => changeColour("green")}/>
            <Button btnName={"Red"} onClick={() => changeColour("red")}/>
            <Button btnName={"Clear"} onClick={() => changeColour("")}/>
        </div>
    )
}

export default BtnHolder;