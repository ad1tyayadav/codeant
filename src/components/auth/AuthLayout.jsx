import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] sm:w-[50%] flex flex-col items-center justify-center sm:ml-auto p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <img
            src="/Codeant.avif"
            alt="Logo"
            className="w-52 h-auto rounded-full invert"
          />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">Welcome to CodeAnt AI</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;