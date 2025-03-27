import React from 'react';
const Button = ({ label, onClick, style }) => (React.createElement("button", { onClick: onClick, style: style }, label));
export default Button;
