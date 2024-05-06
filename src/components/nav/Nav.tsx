import { NavContainer, NavItems } from "./Nav.styled";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <NavContainer>
      <NavItems>
        <Icon icon={"mdi:files"} fontSize={"22px"} color="white" />
      </NavItems>
      <NavItems active>
        <Icon icon={"tabler:binary-tree-2"} fontSize={"22px"} color="white" />
      </NavItems>
    </NavContainer>
  );
};

export default Nav;
