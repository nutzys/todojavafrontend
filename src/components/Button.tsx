import React from "react";

const Button = ({ label, onClick }: { label: string; onClick: any }) => {
  return (
    <button
      className="bg-blue-600 flex items-center justify-center px-4 py-2 rounded-lg text-white hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
