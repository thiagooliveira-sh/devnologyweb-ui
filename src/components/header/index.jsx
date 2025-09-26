import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../cart/index";
import * as Styles from "./styles";
import { FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [userInitial, setUserInitial] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axios.post(
          "http://devnology-alb-1825440527.sa-east-1.elb.amazonaws.com:3001/auth/verify-auth",
          {},
          {
            withCredentials: true,
          }
        );

        if (response.data.message === "Autenticado!") {
          const name = localStorage.getItem('name');
          if (name) {
            setUserInitial(name.charAt(0).toUpperCase());
          }
        }
      } catch (error) {
        localStorage.removeItem('name');
        setUserInitial("");
      }
    };

    verifyAuth();
  }, []);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = async () => {
    try {
      await axios.post(
        "http://devnology-alb-1825440527.sa-east-1.elb.amazonaws.com:3001/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      localStorage.removeItem('name');
      setUserInitial("");
      setShowUserMenu(false);
    }
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <Styles.Container>
      <Styles.Logo onClick={() => navigate("/")}>Devnology Shopping</Styles.Logo>
      
      <Styles.Buttons>
        {userInitial ? (
          <Styles.UserContainer>
            <Styles.UserAvatar onClick={toggleUserMenu}>
              {userInitial}
            </Styles.UserAvatar>
            
            {showUserMenu && (
              <Styles.UserDropdown>
                <Styles.DropdownItem onClick={() => navigate("/profile")}>
                  <FiUser size={16} />
                  <span>Meu Perfil</span>
                </Styles.DropdownItem>
                <Styles.DropdownItem onClick={handleLogoutClick}>
                  <FiLogOut size={16} />
                  <span>Sair</span>
                </Styles.DropdownItem>
              </Styles.UserDropdown>
            )}
          </Styles.UserContainer>
        ) : (
          <Styles.LoginButton onClick={handleLoginClick}>
            <FiUser size={18} />
            <span>Login</span>
          </Styles.LoginButton>
        )}

        <Styles.CartButton onClick={handleCartClick}>
          <FiShoppingCart size={18} />
          <span>Carrinho</span>
        </Styles.CartButton>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;