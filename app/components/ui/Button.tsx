import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
