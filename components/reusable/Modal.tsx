import React from "react";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: "success" | "error";
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2
          className={`text-xl font-semibold ${
            type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {title}
        </h2>
        <p className="mt-2 text-gray-700">{message}</p>
        <div className="mt-4 flex justify-end">
          <Button onClick={onClose} className="bg-[#25a3d8] text-white">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;