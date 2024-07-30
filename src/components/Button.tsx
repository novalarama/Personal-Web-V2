import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="self-start px-9 py-4 mt-8 rounded-3xl border border-blue-900 border-solid bg-blue-900 bg-opacity-10 shadow-[0px_4px_27px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-6">
      {children}
    </button>
  );
};

export default Button;
