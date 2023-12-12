import React from "react";

const Field = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col my-2">
      <p className="text-sm text-gray-600 px-2 mb-2">{label}</p>
      <input type="text" className="rounded-md h-10" />
    </div>
  );
};

export default Field;
