import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { HiOutlineMenu } from "react-icons/hi";
import style from "../../styles/ui/navbar.module.scss";

import { LinksDropdown } from "./LinksDropdown";

function NavScrollExample({ showSidebar }) {
  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${style.navbar__header}`}
      sticky="top"
    >
      <Container fluid>
        <button onClick={showSidebar}>
          <HiOutlineMenu size="24" color="green" />
        </button>
        <LinksDropdown />
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
