import styled from "styled-components";

export const CardTotalStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2em;
  gap: 1em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-inline: 15em;
    gap: 2em;
  }
`;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  gap: 1em;
  background: linear-gradient(
        ${({ theme, darkMode }) =>
          theme.colors[darkMode ? "dark" : "light"].cardBackground},
        ${({ theme, darkMode }) =>
          theme.colors[darkMode ? "dark" : "light"].cardBackground}
      )
      padding-box,
    ${({ theme, border }) => theme.colors[border]} border-box;
  border-top: 5px solid transparent;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: linear-gradient(
          ${({ theme, darkMode }) =>
            theme.colors[darkMode ? "dark" : "light"].cardBackgroundHover},
          ${({ theme, darkMode }) =>
            theme.colors[darkMode ? "dark" : "light"].cardBackgroundHover}
        )
        padding-box,
      ${({ theme, border }) => theme.colors[border]} border-box;
  }
  .social-account {
    display: flex;
    align-items: center;
    gap: 0.5em;
    small {
      color: ${({ theme, darkMode }) =>
        theme.colors[darkMode ? "dark" : "light"].text};
      font-weight: 700;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.3em;
      }
    }
  }

  .followers {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 5em;
      color: ${({ theme, darkMode }) =>
        theme.colors[darkMode ? "dark" : "light"].textAccent};
    }
    span {
      color: ${({ theme, darkMode }) =>
        theme.colors[darkMode ? "dark" : "light"].text};
      text-transform: uppercase;
      font-size: 1.5em;
      letter-spacing: 0.2em;
      margin-top: -15px;
    }
  }

  .today-total {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-weight: 700;
    gap: 0.2em;
    color: ${({ theme, darkMode, today }) =>
      today < 0
        ? theme.colors.brightRed
        : today < 20
        ? theme.colors[darkMode ? "dark" : "light"].textAccent
        : theme.colors.limeGreen};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.3em;
    }
  }
`;
