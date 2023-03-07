import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
const Notification=(props)=>{
return (
    <Navbar fixed="top" bg='dark' variant="dark">
        <NavbarBrand>{props.title}</NavbarBrand>
        <Nav className="ms-auto">
            <Nav.Item><p>{props.message}</p></Nav.Item></Nav>
    </Navbar>
)
}
export default Notification;