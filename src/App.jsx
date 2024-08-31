// App.js
import React from 'react';
import Button from './Button';
import Link from './Link';
import Footer from './Footer';

function App() {
    const changeColour = (colour) => {
        switch (colour) {
            case "red":
                console.log("colour picked = red");
                break;
            case "green":
                console.log("colour picked = green");
                break;
            case 'blue':
                console.log("colour picked = blue");
                break;
            case "white":
                console.log("colour picked = white");
                break;
            default:
                console.log("Unknown colour");
        }
    };

    return (
        <>
            <nav className={"navBar"}>
                <Link target="#" name="Home" />
                <Link target="#" name="About" />
                <Link target="#" name="Services" />
                <Link target="#" name="Contact" />
            </nav>
            <div className="btnHolder">
                <Button btnName={"Blue"} onClick={() => changeColour("blue")} /> {/* Fix the prop name */}
                <Button btnName={"Green"} onClick={() => changeColour("green")} />
                <Button btnName={"Red"} onClick={() => changeColour("red")} />
                <Button btnName={"White"} onClick={() => changeColour("white")} />
            </div>
            <Footer />
        </>
    );
}

export default App;
