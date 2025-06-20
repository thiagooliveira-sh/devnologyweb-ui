import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import * as Styles from "./styles";
import CartItem from "../cart-item/index";
import { toast } from "react-toastify";

const Cart = ({ isVisible, setIsVisible }) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  });

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/auth/verify-auth",
          {},
          { withCredentials: true }
        );
        setIsTokenValid(response.data.message === "Autenticado!");
      } catch (error) {
        setIsTokenValid(false);
      }
    };

    if (showPaymentForm) {
      verifyToken();
    }
  }, [showPaymentForm]);

  const handleEscapeAreaClick = () => {
    setIsVisible(false);
    setShowPaymentForm(false);
  };

  const handleFinalizarCompra = () => {
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!isTokenValid) {
      alert("Para finalizar a compra, é necessário efetuar o login.");
      return;
    }

    setIsProcessing(true);

    try {
      const cleanCardNumber = paymentData.cardNumber.replace(/\s/g, '');
      const cleanExpiryDate = paymentData.expiryDate.replace(/\//g, '');

      const saleData = {
        payment: {
          ...paymentData,
          cardNumber: cleanCardNumber,
          expiryDate: cleanExpiryDate
        },
        products: products.map((product) => ({
          productId: product.id,
          quantity: product.quantity,
          price: +product.price,
        })),
        total: products.reduce(
          (total, product) => {
            const price = parseFloat(product.price);
            const quantity = parseInt(product.quantity, 10);

            if (isNaN(price) || isNaN(quantity)) {
              console.warn(`Produto inválido: ${JSON.stringify(product)}`);
              return total;
            }

            return total + (price * quantity);
          },
          0
        ),
      };

      const response = await axios.post("http://localhost:3001/sales", saleData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      });

      console.log("Venda registrada:", response.data);
      toast.success("🎉 Compra realizada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: "#4BB543",
          color: "#fff",
          fontWeight: "bold"
        }
      });

      setIsVisible(false);
      setShowPaymentForm(false);
      setPaymentData({
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
      });
    } catch (error) {
      console.error("Erro:", error);
      alert(
        "Ocorreu um erro ao processar seu pagamento. Por favor, tente novamente."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted.slice(0, 19);
  };

  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{2})(?=\d{2})/, '$1/');
    return formatted.slice(0, 5);
  };

  const formatCVV = (value) => {
    return value.replace(/\D/g, '').slice(0, 3);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    switch (name) {
      case 'cardNumber':
        formattedValue = formatCardNumber(value);
        break;
      case 'expiryDate':
        formattedValue = formatExpiryDate(value);
        break;
      case 'cvv':
        formattedValue = formatCVV(value);
        break;
      case 'cardName':
        formattedValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
        break;
      default:
        break;
    }

    setPaymentData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const total = products.reduce(
    (sum, product) => {
      const price = parseFloat(product.price);
      const quantity = parseInt(product.quantity, 10);

      if (isNaN(price) || isNaN(quantity)) {
        console.warn(`Produto inválido: ${JSON.stringify(product)}`);
        return sum;
      }

      return sum + price * quantity;
    },
    0
  );

  const isPaymentDataValid = () => {
    return (
      paymentData.cardNumber.replace(/\s/g, '').length === 16 &&
      paymentData.cardName.trim() !== '' &&
      paymentData.expiryDate.replace(/\//g, '').length === 4 &&
      paymentData.cvv.length === 3
    );
  };

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent isVisible={isVisible}>
        <Styles.CartHeader>
          <Styles.CartTitle>
            {showPaymentForm ? "Pagamento" : "Seu Carrinho"}
          </Styles.CartTitle>
          <Styles.CloseButton onClick={handleEscapeAreaClick}>×</Styles.CloseButton>
        </Styles.CartHeader>

        {!showPaymentForm ? (
          <>
            <Styles.CartItemsContainer>
              {products.length > 0 ? (
                products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))
              ) : (
                <Styles.EmptyCartMessage>Seu carrinho está vazio</Styles.EmptyCartMessage>
              )}
            </Styles.CartItemsContainer>

            {products.length > 0 && (
              <Styles.CartFooter>
                <Styles.CartTotal>
                  <p>Total:</p>
                  <p>R$ {total.toFixed(2)}</p>
                </Styles.CartTotal>
                <Styles.FinalizarButton onClick={handleFinalizarCompra}>
                  Finalizar Compra
                </Styles.FinalizarButton>
              </Styles.CartFooter>
            )}
          </>
        ) : (
          <Styles.PaymentForm onSubmit={handlePaymentSubmit}>
            <Styles.FormGroup>
              <Styles.FormLabel>Número do Cartão</Styles.FormLabel>
              <Styles.FormInput
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
              />
            </Styles.FormGroup>

            <Styles.FormGroup>
              <Styles.FormLabel>Nome no Cartão</Styles.FormLabel>
              <Styles.FormInput
                type="text"
                name="cardName"
                value={paymentData.cardName}
                onChange={handleInputChange}
                placeholder="Nome como está no cartão"
                required
              />
            </Styles.FormGroup>

            <Styles.FormGroup>
              <Styles.FormLabel>Validade</Styles.FormLabel>
              <Styles.FormInput
                type="text"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/AA"
                maxLength={5}
                required
              />
            </Styles.FormGroup>

            <Styles.FormGroup>
              <Styles.FormLabel>CVV</Styles.FormLabel>
              <Styles.FormInput
                type="text"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength={3}
                required
              />
            </Styles.FormGroup>

            <Styles.PaymentButton
              type="submit"
              disabled={isProcessing || !isTokenValid || !isPaymentDataValid()}
            >
              {isProcessing ? "Processando..." : "Confirmar Pagamento"}
            </Styles.PaymentButton>

            {!isTokenValid && (
              <Styles.AuthMessage>
                Para finalizar a compra, é necessário efetuar o login.
              </Styles.AuthMessage>
            )}
          </Styles.PaymentForm>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;