import styled from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  text-align: center;

  article {
    padding: 1rem;
    margin: 2rem 0;
    border-top: 1px solid rgb(75, 75, 75);
    border-bottom: 1px solid rgb(75, 75, 75);
  }

  .videoContainer {
    height: 400px;
  }

  video {
    width: 100%;
    height: 100%;
    grid-column: 1 / -1;
  }

  .intro {
    display: grid;
    height: 250px;
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
  }
`;
