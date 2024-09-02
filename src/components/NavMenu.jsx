import Link from './Link';
function NavMenu(){

return(
    <>
    <nav className={"navBar"}>
        <Link linkTo="/" linkName="Home" />
        <Link linkTo="/Hello" linkName="Hello" />
        <Link linkTo="/Counter" linkName="Counter" />
        <Link linkTo="/Colour" linkName="Colour" />
        <Link linkTo="/ToDo" linkName="To Do List" />
    </nav>
    </>
)
}


export default NavMenu;