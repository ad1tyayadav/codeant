import React from 'react';

const AuthButton = ({ icon: Icon, text, onClick, variant = 'outline' }) => {
  const baseStyles = "flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg transition-colors";
  const variantStyles = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "border border-gray-300 hover:bg-gray-50";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      <Icon size={20} />
      <span>{text}</span>
    </button>
  );
};

export default AuthButton;