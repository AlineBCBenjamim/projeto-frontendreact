import styled from "styled-components";

export const CardProdutoStyled = styled.section`
 
  width: 280px;
  height: 460px;
  background: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 40px;
  flex-direction: column;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 1px 2px 5px grey;


  &&::before {
    content: "";
    position: absolute;
    width: 100px;
    background-image: linear-gradient(
      180deg,
      rgb(0, 183, 255),
      rgb(255, 48, 255)
    );
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  &&::after {
    content: "";
    position: absolute;
    background: white;
    inset: 5px;
    border-radius: 15px;
  }

  img {
    width: 150px;
    border-radius: 20px;
    z-index: 2;
  }

  h3 {
    position: relative;
    z-index: 2;
    font-size: 1.1rem;
    font-weight: 200;
    margin: 0 20px;
  }

  button {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 17px;
    padding: 0.8em 1.3em 0.8em 0.9em;
    color: white;
    background: #ad5389;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    border: none;
    letter-spacing: 0.05em;
    border-radius: 16px;
    z-index: 2;
  }

  button svg {
    margin-right: 3px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }

  button span {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }

  button:hover svg {
    transform: translateX(5px) rotate(90deg);
  }

  button:hover span {
    transform: translateX(7px);
  }
`;
