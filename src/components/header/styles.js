import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #222222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 100;
`;

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: #eee;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: #eee;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const UserContainer = styled.div`
  position: relative;
`;

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #555;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #666;
    transform: scale(1.05);
  }
`;

export const UserDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  background-color: #333;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  min-width: 180px;
  overflow: hidden;
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #eee;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #444;
  }
  
  svg {
    color: #bbb;
  }
`;