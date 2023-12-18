import React from "react";

const Field = ({ label, onChange }: { label: string; onChange: () => {} }) => {
  return (
    <div className="flex flex-col my-2">
      <p className="text-sm text-gray-600 px-2 mb-2">{label}</p>
      <input type="text" className="rounded-md h-10" onChange={onChange} />
    </div>
  );
};

export default Field;
