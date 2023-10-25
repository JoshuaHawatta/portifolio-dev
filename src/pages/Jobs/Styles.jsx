import styled, { keyframes } from "styled-components";

const showFromUp = keyframes`
    0% {
		transform: translate(-50%, 1rem);
    }
    50% {
		transform: translate(-50%, 3rem);
	}
    100% {
		transform: translate(-50%, 0);
	}
`;

const showFromUpMobile = keyframes`
    0% {
		transform: translate(-50%, 4rem);
    }
    50% {
		transform: translate(-50%, -2rem);
	}
    100% {
		transform: translate(-50%, 0);
	}
`;

export const ArticleWrapper = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  padding: 0 12rem;
  background-color: var(--blue-color);

  /*CHILDREN_ELEMENTS*/
  h1 {
    margin: 10rem 0;
    font: 11rem harry-fat, Helvetica, sans-serif;
    color: var(--green-color);

    /*CHILDREN_ELEMENTS*/
    span {
      color: #ffffff;
    }
  }

  /*MOBILE*/
  @media (max-width: 500px) {
    padding: 4rem 2rem;
    height: auto;

    /*CHILDREN_ELEMENTS*/
    h1 {
      width: 100%;
      font-size: 15vw;
    }

    div {
      width: 20rem;
      height: 20rem;
      padding: 2rem 0;

      span {
        display: none;
      }

      h4 + p {
        display: none;
      }
    }

    aside {
      top: unset;
      bottom: 0;
      width: 100vw;
      height: 70vh;
      border-radius: 0;
      z-index: 4;
      max-width: unset;
      animation: ${showFromUpMobile} 0.8s ease forwards;

      button {
        font-size: 13vw;
      }

      section {
        display: flex;
        height: unset;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;
        padding: 0;

        h5 {
          width: 100%;
          font-size: 13vw;
        }

        /*REMOVE_UNNECESSARY_DIV_AND_SHOWING_JUST_THE_OTHER_TWO*/

        div + div,
        div + div + div {
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          width: 100%;
          height: 50%;
        }

        div + div {
          height: 20%;
        }

        div + div + div {
          width: 100%;

          p {
            width: 100%;
            font-size: 4.5vw;
          }
        }

        ul > li {
          font-size: 4vw;
        }
      }
    }
  }

  @media (max-width: 500px) and (orientation: landscape) {
    padding: 2rem;
    height: auto;

    /*CHILDREN_ELEMENTS*/
    h1 {
      width: 100%;
      margin: 6rem;
      font-size: 10vw;
    }

    h1 + section {
      width: 100%;
      gap: 4rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18vw;
      height: 18vw;

      img {
        width: 12vw;
        height: 12vw;
        margin: 0;
        transform: translateY(50%);
      }

      span {
        display: none;
      }

      h4 {
        display: none;
      }
    }

    aside {
      top: unset;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      z-index: 4;
      max-width: unset;
      animation: ${showFromUpMobile} 0.8s ease forwards;

      button {
        transform: translateX(-100%);
        font-size: 13vw;
      }

      section {
        display: flex;
        height: unset;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;
        padding: 0;

        h5 {
          width: 100%;
          font-size: 10vw;
        }

        /*REMOVE_UNNECESSARY_DIV_AND_SHOWING_JUST_THE_OTHER_TWO*/

        div + div,
        div + div + div {
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          width: 100%;
          height: 50%;
        }

        div + div {
          height: 20%;
        }

        div + div + div {
          width: 100%;

          p {
            width: 100%;
            font-size: 3.5vw;
          }
        }

        ul > li {
          font-size: 3.5vw;
        }
      }
    }
  }

  //TABLET
  @media (min-width: 501px) and (max-width: 1100px) {
    padding: 4rem 2rem;

    /*CHILDREN_ELEMENTS*/
    h1 {
      width: 100%;
      font-size: 9vw;
    }

    div {
      width: 15rem;
      height: 15rem;
      padding: 1rem 0;

      span {
        display: none;
      }

      h4 + p {
        display: none;
      }
    }

    aside {
      top: unset;
      bottom: 0;
      width: 100vw;
      height: 70vh;
      border-radius: 0;
      z-index: 4;
      max-width: unset;
      animation: ${showFromUpMobile} 0.8s ease forwards;

      button {
        font-size: 13vw;
      }

      section {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;
        padding: 0;

        h5 {
          width: 100%;
          font-size: 13vw;
        }

        /*REMOVE_UNNECESSARY_DIV_AND_SHOWING_JUST_THE_OTHER_TWO*/

        div + div,
        div + div + div {
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          width: 100%;
          height: 50%;
        }

        div + div {
          height: 20%;
        }

        div + div + div {
          width: 100%;

          p {
            width: 100%;
            font-size: 3.7vw;
          }
        }

        ul > li {
          font-size: 3vw;
        }
      }
    }
  }

  @media (min-width: 501px) and (max-width: 1100px) and (orientation: landscape) {
    height: auto;

    /*CHILDREN_ELEMENTS*/
    h1 {
      width: 100%;
      margin: 5rem 0;
      font-size: 8vw;
    }

    h1 + section {
      width: 100%;
      gap: 4rem;
    }

    aside {
      top: unset;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      z-index: 4;
      max-width: unset;
      animation: ${showFromUpMobile} 0.8s ease forwards;

      button {
        font-size: 10vw;
      }

      section {
        display: flex;
        height: unset;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;
        padding: 0;

        h5 {
          width: 100%;
          font-size: 9.5vw;
        }

        /*REMOVE_UNNECESSARY_DIV_AND_SHOWING_JUST_THE_OTHER_TWO*/

        div + div,
        div + div + div {
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          width: 100%;
          height: 50%;
        }

        div + div {
          height: 20%;
        }

        div + div + div {
          width: 100%;

          p {
            width: 80%;
            font-size: 2.3vw;
          }
        }

        ul > li {
          font-size: 2vw;
        }
      }
    }
  }

  //FIXING_FOR_BIGGER_TABLES
  @media (min-width: 1020px) and (max-width: 1190px) and (orientation: landscape) {
    height: 100vh;

    /*CHILDREN_ELEMENTS*/
    h1 {
      width: 100%;
      margin: 6rem;
      font-size: 10vw;
    }

    h1 + section {
      width: 100%;
      gap: 4rem;
    }

    aside {
      top: unset;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      z-index: 4;
      max-width: unset;
      animation: ${showFromUpMobile} 0.8s ease forwards;

      button {
        font-size: 10vw;
      }

      section {
        display: flex;
        height: unset;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 100%;
        width: 100%;
        padding: 0;

        h5 {
          width: 100%;
          font-size: 9.5vw;
        }

        /*REMOVE_UNNECESSARY_DIV_AND_SHOWING_JUST_THE_OTHER_TWO*/

        div + div,
        div + div + div {
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          width: 100%;
          height: 50%;
        }

        div + div {
          height: 20%;
        }

        div + div + div {
          width: 100%;

          p {
            width: 80%;
            font-size: 2.3vw;
          }
        }

        ul > li {
          font-size: 2vw;
        }
      }
    }
  }
`;

export const ExperiencesSection = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5rem;

  //CHILDREN_ELEMENTS
  button {
    outline: none;
    background: none;
    border: none;
  }
`;

export const Jobs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: -2rem 1rem 3rem rgba(0, 0, 0, 0.3);
  width: 18rem;
  height: 18rem;
  max-height: 20rem;
  padding: 1.5rem;
  border-radius: 15%;

  /*CHILDREN_ELEMENTS*/
  span {
    cursor: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: none;
    color: var(--blue-color);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
  }
`;

export const JobTitleDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  gap: 2rem;

  /*CHILDREN_ELEMENTS*/
  img {
    width: 7rem;
    height: 7rem;
  }
`;

export const RoleDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 1rem;
  width: 100%;

  /*CHILDREN_ELEMENTS*/
  h4,
  p {
    color: var(--brighter-blue-color);
  }

  h4 {
    font: 2rem "harry-fat", Arial, sans-serif;
  }

  p {
    font: 1.3rem "now-medium", Arial, sans-serif;
  }
`;

/*POPUP*/
export const PopupWrapper = styled.aside`
  position: fixed;
  width: 50vw;
  max-width: 50vw;
  height: 45.5vh;
  cursor: pointer;
  margin: 0 auto;
  top: 0;
  right: 0;
  left: 50vw;
  padding: 1.5rem 2.5rem;
  border-radius: 4rem;
  box-shadow: -4rem 2rem 3rem rgba(0, 0, 0, 0.5);
  animation: ${showFromUp} 0.7s ease forwards;
  background-color: #ffffff;
`;

export const PopupContent = styled.section`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: start;
  gap: 2rem;

  /*CHILDREN_ELEMENTS*/
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    color: var(--blue-color);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    font-size: 2.5rem;
  }

  h5,
  li,
  span,
  p {
    color: var(--blue-color);
  }

  h5 {
    font: 6rem "harry-fat", Arial, sans-serif;
  }

  p {
    font: 1.7rem "now-medium", Arial, sans-serif;
    width: 60%;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    font: 1.5rem "now-medium", Arial, sans-serif;
  }
`;
