import React from 'react';

const Button = ({ type, children, onClick }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className="w-full px-3 py-4 bg-slate-500 rounded-md font-bold text-white hover:bg-slate-600 hover:text-red-500"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
