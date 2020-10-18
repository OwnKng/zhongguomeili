import styled from "styled-components";

export const Content = styled.div`
  width: 90%;
  max-width: 720px;
  margin: 0px auto;
  padding: 50px 0px;
  background: #1f1e20;
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
  margin-top: 20px;
  top: 0px;
  position: sticky;
  background: rgb(31, 30, 32);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0rem;
  justify-content: center;
  place-items: center;
  z-index: 1;
  border-top: 1px solid rgb(75, 75, 75);
  border-bottom: 1px solid rgb(75, 75, 75);

  .control {
    font-size: 1rem;
    border-radius: 20px;
    border: 2px solid grey;
    padding: 0.6rem;
  }
`;

export const Header = styled.header`
  display: grid;
  row-gap: 20px;

  grid-template-areas:
    "title title"
    "desc desc";

  grid-template-columns: auto 100px;
`;

export const Desc = styled.div`
  grid-area: desc;
`;

export const Hero = styled.img`
  grid-column: 1 / -1;
`;

export const Title = styled.h1`
  margin: 0px auto;
  text-align: center;
  grid-area: title;
`;

export const LanguageToggle = styled.div`
  grid-area: language;
`;

export const Footer = styled.footer`
  border-top: 1px solid white;
  opacity: 0.2;
  padding: 1rem 0rem 3rem 0rem;
`;
