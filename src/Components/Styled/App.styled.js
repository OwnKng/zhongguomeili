import styled from "styled-components";

export const Content = styled.div`
  width: 90%;
  max-width: 720px;
  margin: 0px auto;
  padding: 50px 0px;
  background: rgb(29, 29, 29);
  border-left: 1px solid rgb(75, 75, 75);
  border-right: 1px solid rgb(75, 75, 75);
  display: grid;
  grid-template-columns:
    3rem
    auto
    3rem;

  > * {
    grid-column: 2;
  }
`;

export const Controls = styled.div`
  grid-column: 1 / -1;
  backdrop-filter: blur(10px);
  background: rgba(29, 29, 29, 0.5);
  position: sticky;
  margin-top: 0px;
  top: -1px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0rem;
  justify-content: center;
  place-items: center;
  z-index: 1;
  border-top: none;
  border-bottom: 1px solid rgb(75, 75, 75);

  .control {
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
    border-radius: 20px;
    border: 1px solid rgb(175, 175, 175);
    padding: 0.6rem;
    user-select: none;
  }

  .active {
    color: black;
    background: rgb(175, 175, 175);
  }
`;

export const Header = styled.header`
  display: grid;
  grid-column: 1 / -1;
  row-gap: 20px;

  grid-template-areas:
    "title title title"
    ". desc ."
    "hero hero hero";

  grid-template-columns:
    3rem
    auto
    3rem;
`;

export const Desc = styled.div`
  grid-area: desc;
`;

export const Hero = styled.img`
  grid-area: hero;
  width: 100%;
  border-top: 1px solid rgb(75, 75, 75);
  border-bottom: 1px solid rgb(75, 75, 75);
`;

export const Title = styled.h1`
  margin: 0px auto;
  padding: 1rem 0rem;
  width: 100%;
  text-align: center;
  grid-area: title;
  border-bottom: 1px solid rgb(75, 75, 75);
`;

export const LanguageToggle = styled.div`
  grid-area: language;
`;

export const Footer = styled.footer`
  border-top: 1px solid white;
  opacity: 0.2;
  padding: 1rem 0rem 3rem 0rem;
`;
