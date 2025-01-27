import React from 'react';

const MaterialButton = ({ 
  label, 
  onClick, 
  disabled = false 
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`
        px-6 py-2 
        font-semibold 
        text-white 
        bg-blue-500 
        rounded-md 
        shadow-md 
        transition-all 
        duration-200 
        transform 
        hover:bg-blue-600 
        hover:shadow-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:ring-opacity-50
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default MaterialButton;