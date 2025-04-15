"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Skill } from "@/generated/prisma";

interface SkillFormProps {
  skill?: Skill;
  onSubmit: (formData: FormData) => Promise<void>;
  onCancel: () => void;
  title: string;
}

export default function SkillForm({ skill, onSubmit, onCancel, title }: SkillFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    title: skill?.title || "",
    description: skill?.description || "",
  });

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 入力値の変更を管理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-kusagi">{title}</h2>
          <button onClick={onCancel} className="text-sumi hover:text-akane">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-sumi mb-1">
              タイトル
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formValues.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-washi-300 rounded-md focus:outline-none focus:ring-2 focus:ring-asagi"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-sumi mb-1">
              説明
            </label>
            <textarea
              id="description"
              name="description"
              value={formValues.description || ""}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-washi-300 rounded-md focus:outline-none focus:ring-2 focus:ring-asagi"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-washi-300 rounded-md text-sumi hover:bg-washi-50"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-asagi text-white rounded-md hover:bg-asagi/80 disabled:opacity-50"
            >
              {isSubmitting ? "保存中..." : "保存"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
