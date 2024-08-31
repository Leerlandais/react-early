import Footer from "./Footer.jsx";
import Button from "./Button.jsx";
import Link from "./Link.jsx";
function App() {
return(
  <>
      <nav>
          <Link target="#" name="Home"/>
          <Link target="#" name="About"/>
          <Link target="#" name="Services"/>
          <Link target="#" name="Contact"/>
      </nav>
      <Button btnName={"Add"} />
      <Button btnName={"Update"} />
      <Button btnName={"Delete"} />
      <Button btnName={"Exit"} />
    <Footer />
  </>
)
}

export default App
