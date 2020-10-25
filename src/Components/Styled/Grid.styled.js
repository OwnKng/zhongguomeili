import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  width: 100%;
  min-height: 1800px;
  margin-bottom: 2rem;
  grid-template-rows: repeat(13, 150px);

  grid-template-areas:
    "one two"
    "one two"
    "one three"
    "one three"
    "four four"
    "four four"
    "four four"
    "five six"
    "five six"
    "seven eight"
    "seven eight"
    "nine nine"
    "nine nine";

  @media only screen and (max-width: 600px) {
    min-height: 2000px;

    grid-template-areas:
      "four"
      "two"
      "three"
      "one"
      "one"
      "five"
      "six"
      "seven"
      "eight"
      "nine";
  }

  img {
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .one {
    grid-area: one;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .two {
    grid-area: two;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .three {
    grid-area: three;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .four {
    grid-area: four;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .five {
    grid-area: five;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .six {
    grid-area: six;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .seven {
    grid-area: seven;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .eight {
    grid-area: eight;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .nine {
    grid-area: nine;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
