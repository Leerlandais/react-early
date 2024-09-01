import Link from './Link';
function NavMenu(){

return(
    <>
    <nav className={"navBar"}>
        <Link linkTo="/" linkName="Home" />
        <Link linkTo="/About" linkName="About" />
        <Link linkTo="/Services" linkName="Services" />
        <Link linkTo="/Contact" linkName="Contact" />
    </nav>
    </>
)
}


export default NavMenu;