import styled from "styled-components";

export const DashboardStyled = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, darkMode }) =>
    theme.colors[darkMode ? "dark" : "light"].background};
  width: 100vw;
  height: 100%;
  gap: 1em;

  header {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 30vh;
    gap: 1em;
    border: none;
    border-radius: 0 0 20px 20px;
    padding: 2em;
    background-color: ${({ theme, darkMode }) =>
      theme.colors[darkMode ? "dark" : "light"].topBackground};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      flex-direction: row;
      padding: 0 15em;
      align-items: center;
      justify-content: space-between;
    }
    .title {
      display: flex;
      flex-direction: column;
    }
    h1 {
      color: ${({ theme, darkMode }) =>
        theme.colors[darkMode ? "dark" : "light"].textAccent};
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 3em;
      }
    }

    span {
      color: ${({ theme, darkMode }) =>
        theme.colors[darkMode ? "dark" : "light"].text};
      font-weight: 700;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.5em;
      }
    }

    hr {
      border-block-color: ${({ theme, darkMode }) =>
        theme.colors[darkMode ? "dark" : "light"].text};
      border-width: 0.1px;
      width: 100%;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        display: none;
      }
    }
  }

  .wrapper {
    position: absolute;
    top: 170px;
    left: 0;
    right: 0;
    bottom: 0;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      top: 230px;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  h2 {
    margin-top: 20px;
    padding-inline: 2em;
    color: ${({ theme, darkMode }) =>
      theme.colors[darkMode ? "dark" : "light"].textAccent};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 2.5em;
      padding-inline: 6em;
    }
  }
`;
