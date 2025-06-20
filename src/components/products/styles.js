import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  gap: 30px;
  padding: 2.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    padding: 2rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 25px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 15px;
    padding: 1rem;
  }
`;