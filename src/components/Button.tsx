import React from "react";

const Button = ({ label }: { label: string }) => {
  return (
    <button className="bg-blue-600 flex items-center justify-center px-4 py-2 rounded-lg text-white hover:bg-blue-700">
      {label}
    </button>
  );
};

export default Button;
