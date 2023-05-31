import styled from "styled-components";

export const ToggleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    gap: 0.5em;
  }

  span {
    color: ${({ theme, darkMode }) =>
      theme.colors[darkMode ? "dark" : "light"].text};
    font-weight: 700;
    font-size: 0.8em;
  }
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }
  .toggle-switch input[type="checkbox"] {
    display: none;
  }
  .toggle-switch .switch {
    position: absolute;
    cursor: pointer;
    background: ${({ theme, darkMode }) =>
      theme.colors[darkMode ? "dark" : "light"].toggle};
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }
  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: 3px;
    top: 3px;
    width: 15px;
    height: 15px;
    background-color: ${({ theme, darkMode }) =>
      theme.colors[darkMode ? "dark" : "light"].topBackground};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: translateX(20px);
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transform: translateX(0);
    background-color: ${({ theme, darkMode }) =>
      theme.colors[darkMode ? "dark" : "light"].topBackground};
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    background: ${({ theme, darkMode }) =>
      theme.colors[darkMode ? "dark" : "light"].toggle};
  }
`;
