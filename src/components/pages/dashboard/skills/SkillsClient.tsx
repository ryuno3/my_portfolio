"use client";

import { useState } from "react";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import SkillForm from "./SkillForm";
import DeleteConfirmDialog from "@/components/ui/DeleteConfirmDialog";
import { Skill } from "@/generated/prisma";

interface SkillsClientProps {
  initialSkills: Skill[];
  onAddSkill: (formData: FormData) => Promise<void>;
  onUpdateSkill: (id: string, formData: FormData) => Promise<void>;
  onDeleteSkill: (id: string) => Promise<void>;
}

export default function SkillsClient({
  initialSkills,
  onAddSkill,
  onUpdateSkill,
  onDeleteSkill,
}: SkillsClientProps) {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [deletingSkillId, setDeletingSkillId] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // 追加モーダルを開く
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  // 編集モーダルを開く
  const openEditModal = (skill: Skill) => {
    setEditingSkill(skill);
  };

  // 削除確認モーダルを開く
  const openDeleteModal = (id: string) => {
    setDeletingSkillId(id);
    setIsDeleteModalOpen(true);
  };

  // スキル追加の処理
  const handleAddSubmit = async (formData: FormData) => {
    await onAddSkill(formData);

    // フォームデータから新しいスキルオブジェクトを作成（仮のIDを付与）
    const newSkill: Skill = {
      id: Date.now().toString(), // 一時的なID
      title: formData.get("title") as string,
      description: (formData.get("description") as string) || null,
      createdAt: new Date(),
    };

    setSkills([...skills, newSkill]);
    setIsAddModalOpen(false);
  };

  // スキル更新の処理
  const handleUpdateSubmit = async (formData: FormData) => {
    if (!editingSkill) return;

    await onUpdateSkill(editingSkill.id!, formData);

    // 更新されたスキルを反映
    const updatedSkill: Skill = {
      ...editingSkill,
      title: formData.get("title") as string,
      description: (formData.get("description") as string) || null,
    };

    setSkills(skills.map((skill) => (skill.id === editingSkill.id ? updatedSkill : skill)));
    setEditingSkill(null);
  };

  // スキル削除の処理
  const handleDelete = async () => {
    if (!deletingSkillId) return;

    await onDeleteSkill(deletingSkillId);
    setSkills(skills.filter((skill) => skill.id !== deletingSkillId));
    setIsDeleteModalOpen(false);
    setDeletingSkillId(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-kusagi">スキル一覧</h2>
        <button
          onClick={openAddModal}
          className="inline-flex items-center px-4 py-2 bg-asagi text-white rounded-md hover:bg-asagi/80 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          新規スキル追加
        </button>
      </div>

      {/* スキル一覧テーブル */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-washi-300">
          <thead className="bg-washi-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-sumi uppercase tracking-wider"
              >
                タイトル
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-sumi uppercase tracking-wider"
              >
                説明
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-sumi uppercase tracking-wider"
              >
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-washi-200">
            {skills.map((skill) => (
              <tr key={skill.id} className="hover:bg-washi-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-kusagi">
                  {skill.title}
                </td>
                <td className="px-6 py-4 text-sm text-sumi max-w-xs truncate">
                  {skill.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-sumi">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => openEditModal(skill)}
                      className="text-asagi hover:text-kusagi"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => openDeleteModal(skill.id!)}
                      className="text-akane hover:text-akane/80"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* スキル追加フォーム */}
      {isAddModalOpen && (
        <SkillForm
          onSubmit={handleAddSubmit}
          onCancel={() => setIsAddModalOpen(false)}
          title="新規スキルの追加"
        />
      )}

      {/* スキル編集フォーム */}
      {editingSkill && (
        <SkillForm
          skill={editingSkill}
          onSubmit={handleUpdateSubmit}
          onCancel={() => setEditingSkill(null)}
          title="スキルの編集"
        />
      )}

      {/* 削除確認ダイアログ */}
      <DeleteConfirmDialog
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="スキルの削除"
        message="このスキルを削除してもよろしいですか？この操作は元に戻せません。"
      />
    </div>
  );
}
