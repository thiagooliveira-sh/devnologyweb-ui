import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;
  z-index: 1000;
  pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};

  @media (max-width: 480px) {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

export const CartEscapeArea = styled.div`
  width: 100%;
  cursor: pointer;

  @media (max-width: 480px) {
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
  }
`;

export const CartContent = styled.div`
  height: 100%;
  width: 500px;
  max-width: 100%;
  z-index: 1001;
  background-color: white;
  padding: 25px;
  overflow-y: auto;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: ${(props) => (props.isVisible ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  /* Tablet */
  @media (max-width: 768px) {
    width: 85%;
    padding: 20px;
  }

  /* Mobile Large */
  @media (max-width: 600px) {
    width: 90%;
    padding: 15px;
  }

  /* Mobile Small */
  @media (max-width: 480px) {
    width: 100%;
    padding: 12px;
    border-radius: 0;
    box-shadow: none;
  }

  /* Mobile Extra Small */
  @media (max-width: 360px) {
    padding: 10px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
    padding: 0 5px;
  }
`;

export const CartTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;
  padding: 5px;

  &:hover {
    color: #222;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 3px;
  }
`;

export const CartItemsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  padding-right: 10px;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
    padding-right: 5px;
  }
`;

export const CartFooter = styled.div`
  border-top: 1px solid #eee;
  padding-top: 20px;

  @media (max-width: 480px) {
    padding-top: 15px;
  }
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    
    p {
      font-size: 1.1rem;
    }
  }
`;

export const FinalizarButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #000;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.9rem;
  }
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const FormLabel = styled.label`
  font-size: 0.9rem;
  color: #555;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const FormInput = styled.input`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    border-color: #222;
    outline: none;
    box-shadow: 0 0 0 2px rgba(34, 34, 34, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
`;

export const PaymentButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #000;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.9rem;
  }
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-top: 50px;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 30px;
  }
`;

export const AuthMessage = styled.div`
  color: #d32f2f;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 10px;
  padding: 8px;
  background-color: #ffebee;
  border-radius: 4px;
`;