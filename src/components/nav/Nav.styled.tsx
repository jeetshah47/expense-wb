import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  background-color: #28253b;
  flex: 0 1 initial;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 12px; */
`;

export const NavItems = styled.div<{ active?: boolean }>`
  padding: 14px;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 5px solid #8744e1;
      * {
        color: #8744e1;
      }
    `}
    cursor: pointer;
`;
