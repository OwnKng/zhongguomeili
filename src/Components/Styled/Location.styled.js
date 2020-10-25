import styled from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  text-align: center;
  grid-column: 1 / -1 !important;
  
  display: grid;

  grid-template-columns:
    1rem
    auto
    1rem;

  > * {
    grid-column: 2;
  }

  article {
    padding: 1rem;
    margin: 2rem 0;
    border-top: 1px solid rgb(75, 75, 75);
    border-bottom: 1px solid rgb(75, 75, 75);
  }

  .videoContainer {
    grid-column: 1 / -1;
    height: 400px;
  }

  video {
    width: 99%;
    height: 100%;
  }

  .intro {
    display: grid;
    min-height: 250px;
    grid-template-areas:
      "title title"
      "article article";

    grid-template-rows: 1fr 3fr;
    align-items: baseline;
  }

  .title {
    grid-area: title;
  }

  article {
    grid-area: article;
    font-size: 1rem;
  }
`;
