import React from 'react';

const AuthButton = ({ icon, text, onClick, variant = 'outline' }) => {
  const baseStyles =
    "flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg transition-colors";
  const variantStyles =
    variant === 'primary'
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-gray-300 hover:bg-gray-50";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      <img src={icon} alt={`${text} icon`} className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );
};

export default AuthButton;
