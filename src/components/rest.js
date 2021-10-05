import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  list-style: none;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;


export const NavLink = styled.div`
  display: block;
  padding: 1rem;
  transition: 50ms ease background-color;
  &:hover {
    cursor: pointer;
    background-color: #FBE3F9;
  }
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */

  font-size: 1em;
  margin: 0em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
