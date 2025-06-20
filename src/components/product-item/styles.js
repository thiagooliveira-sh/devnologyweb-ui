import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  position: relative; /* Adicionado */
  z-index: 1; /* Garante que fique abaixo do drawer */

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap: 8px;

  p {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    &:first-child {
      word-break: break-word;
    }
    &:last-child {
      white-space: nowrap;
      margin-left: 8px;
    }
  }
`;

export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 380px;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  position: relative;

  button {
    position: relative;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    margin: 20px;
    width: calc(100% - 40px);
  }

  &:hover {
    button {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;