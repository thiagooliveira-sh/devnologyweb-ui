import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const LoginFormContainer = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #ffffff; /* Fundo branco */
  position: relative;
  z-index: 1;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333333; /* Texto escuro */
  font-weight: 500;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #555555; /* Texto cinza médio */
    font-size: 1rem;
  }
  
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #dddddd; /* Borda clara */
    border-radius: 8px;
    font-size: 1rem;
    background: #ffffff;
    color: #333333; /* Texto escuro */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #aaaaaa;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
    
    &::placeholder {
      color: #999999;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #222222; /* Botão cinza escuro */
  color: #ffffff; /* Texto branco */
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  
  &:hover {
    background-color: #000000; /* Preto no hover */
    transform: translateY(-1px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const ToggleForm = styled.p`
  margin-top: 1.5rem;
  color: #777777; /* Texto cinza */
  font-size: 0.9rem;
  text-align: center;
  
  span {
    color: #444444; /* Cinza mais escuro */
    cursor: pointer;
    font-weight: 500;
    margin-left: 4px;
    
    &:hover {
      text-decoration: underline;
      color: #222222; /* Cor do botão */
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 70%;
  position: relative;
  overflow: hidden;
  background: #000000;
`;

export const ImageEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
  opacity: 0.9;
  transition: all 0.5s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
  
  ${ImageContainer}:hover & {
    transform: scale(1.03);
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  padding-left: 0.25rem;
`;

export const SuccessMessage = styled.div`
  color: #28a745;
  font-size: 0.875rem;
  margin-top: 1rem;
  text-align: center;
`;