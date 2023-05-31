import styled from "styled-components";

export const CardOverviewTodayStyled = styled.section`
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
  gap: 1em;
  padding: 2em;
  border-radius: 10px;
  background-color: ${({ theme, darkMode }) =>
    theme.colors[darkMode ? "dark" : "light"].cardBackground};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme, darkMode }) =>
      theme.colors[darkMode ? "dark" : "light"].cardBackgroundHover};
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    h1 {
      font-size: 3em;
      color: ${({ theme, darkMode }) =>
        theme.colors[darkMode ? "dark" : "light"].textAccent};
    }
  }

  .social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: ${({ theme, darkMode }) =>
        theme.colors[darkMode ? "dark" : "light"].text};
      font-weight: 700;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 1.3em;
      }
    }
  }
  .percentage {
    display: flex;
    align-items: center;
    font-weight: 700;
    gap: 0.2em;
    color: ${({ theme, percentage }) =>
      percentage < 0 ? theme.colors.brightRed : theme.colors.limeGreen};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.3em;
    }
  }
`;
