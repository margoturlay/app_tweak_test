import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #121212;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #ffffff;
`;

export const Header = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  color: #ffffff;
  border-bottom: 2px solid #282828;
  padding-bottom: 12px;
  ::before {
    content: "\25CF";
    font-size: 1.4em;
    margin-right: 12px;
    color: #1db954;
  }
`;

export const DropdownSelect = styled.select`
  width: 100%;
  padding: 12px 18px;
  background: #181818;
  color: #ffffff;
  border: 2px solid #1db954;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:focus {
    border-color: #4a4a4a;
    box-shadow: 0 0 0 4px rgba(29, 185, 84, 0.3);
  }

  option {
    padding: 10px;
    background: #121212;
    color: #ffffff;
  }
`;
