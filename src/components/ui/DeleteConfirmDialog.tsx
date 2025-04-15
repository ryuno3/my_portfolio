"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export default function DeleteConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}: DeleteConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-kusagi">{title}</h2>
          <button onClick={onClose} className="text-sumi hover:text-akane">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <p className="text-sumi mb-6">{message}</p>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-washi-300 rounded-md text-sumi hover:bg-washi-50"
          >
            キャンセル
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-akane text-white rounded-md hover:bg-akane/80"
          >
            削除する
          </button>
        </div>
      </div>
    </div>
  );
}
