import styled from "styled-components";

//CONTAINS_ALL_PAGE_RESPONSIVITY
export const ArticleWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  /*CHILDREN_ELEMENTS*/
  img {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: absolute;
    z-index: -1;
  }

  /*MOBILE*/
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    background-color: #4d4bcb;

    img {
      display: none;
    }

    /*CHILDREN_ELEMENTS*/
    div {
      background-color: unset;
      width: 100%;
      height: auto;
      padding: 6rem 0;
      margin: 0 auto;
      flex-flow: column;
      align-items: center;
      border-radius: unset;

      img {
        display: unset;
      }

      div {
        flex-flow: column;
        padding: 2rem 0;
        align-items: center;
        width: 100%;
        height: 100vh;

        img {
          width: 15rem;
          height: 15rem;
        }

        div {
          width: 80%;

          p {
            margin-top: 1rem;
            font-size: 1.6vh;
          }
        }
      }

      aside {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: unset;
        flex-wrap: wrap;
        width: 100%;
        position: fixed;
        height: 20vh;
        bottom: 0;
        padding: 2rem;
        border-top-left-radius: 15%;
        border-top-right-radius: 15%;
        background-color: var(--darker-blue-color);

        svg {
          font-size: 2.3vh;
        }
      }
    }
  }

  @media (max-width: 500px) and (orientation: landscape) {
    flex-flow: column;
    width: 100%;

    /*CHILDREN_ELEMENTS*/
    div {
      img {
        display: none;
      }

      div {
        div {
          flex-flow: column;
          gap: 1rem;

          p {
            font-size: 2vw;
          }
        }
      }

      aside {
        margin-top: 2rem;
        width: 100%;

        transform: unset;

        svg {
          font-size: 3vw;
        }
      }
    }
  }

  /*TABLET*/
  @media (min-width: 501px) and (max-width: 1100px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-color);

    /*CHILDREN_ELEMENTS*/
    div {
      width: 100%;
      height: 100vh;
      padding: 6rem 0;
      margin: 0 auto;
      flex-flow: column;
      align-items: center;
      border-radius: unset;

      div {
        flex-flow: column;
        align-items: center;
        width: auto;
        height: 100vh;

        img {
          width: 20rem;
          height: 20rem;
        }

        div {
          width: 75%;

          p {
            font-size: 1.7vh;
          }
        }
      }

      aside {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: unset;
        flex-wrap: wrap;
        width: 100%;
        position: fixed;
        bottom: 0;
        height: 20vh;
        border-top-left-radius: 15%;
        border-top-right-radius: 15%;
        background-color: var(--darker-blue-color);

        svg {
          margin: 1rem 0;
          font-size: 2.3vh;
        }
      }
    }
  }

  @media (min-width: 501px) and (max-width: 1100px) and (orientation: landscape) {
    flex-flow: column;
    width: 100%;
    height: auto;

    img {
      display: none;
    }

    /*CHILDREN_ELEMENTS*/
    div {
      height: 170vh;

      div {
        div {
          flex-flow: column;
          gap: 1rem;

          p {
            width: 100%;
            font-size: 2vw;
          }
        }
      }

      aside {
        margin-top: 2rem;
        width: 100%;

        transform: unset;

        svg {
          font-size: 3vw;
        }
      }
    }
  }

  /*SMALL_TABLETS*/
  @media (min-width: 1024px) and (max-width: 1080px) and (orientation: landscape) {
    flex-flow: column;
    width: 100%;
    height: 100vh;

    img {
      height: 100vh;
    }

    /*CHILDREN_ELEMENTS*/
    div {
      height: 100vh;

      div {
        div {
          flex-flow: column;
          gap: 1rem;

          p {
            width: 70%;
            font-size: 1.4vw;
          }
        }
      }

      aside {
        margin-top: 2rem;
        width: 100%;

        transform: unset;

        svg {
          font-size: 3vw;
        }
      }
    }
  }
`;

export const Glassmorphisim = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 80%;
  height: 60vh;
  padding: 0 2rem;
  border-radius: 4rem;
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  background-color: rgba(255, 255, 255, 0.1);

  div {
    display: flex;
    width: 100%;

    a {
      color: #9898ef;
    }

    img {
      z-index: unset;
      position: unset;
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-flow: column wrap;
      text-align: left;
      justify-content: space-evenly;
      margin: 0 auto;
      max-width: unset;
      width: 60%;
      height: 100%;

      /*CHILDREN_ELEMENTS*/
      p {
        font: 1.7rem now-light Arial, Helvetica, sans-serif;
        color: #ffffff;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 80%;
    height: 10%;
    transform: translateX(6%);

    //CHILDREN_ELEMENTS
    svg {
      font-size: 2.8rem;
    }
  }
`;
