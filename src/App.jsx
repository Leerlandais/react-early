import Footer from "./Footer.jsx";
import Button from "./Button.jsx";
import Link from "./Link.jsx";
function App() {
return(
  <>
      <nav className={"navBar"}>
          <Link target="#" name="Home"/>
          <Link target="#" name="About"/>
          <Link target="#" name="Services"/>
          <Link target="#" name="Contact"/>
      </nav>
      <div className="btnHolder">
      <Button btnName={"Add"} />
      <Button btnName={"Update"} />
      <Button btnName={"Delete"} />
      <Button btnName={"Exit"} />
      </div>
    <Footer />
  </>
)
}

export default App
