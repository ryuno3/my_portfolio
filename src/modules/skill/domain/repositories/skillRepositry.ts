import { Skill } from "../entities/skill";

export interface SkillRepository {
  findAll(): Promise<Skill[]>;
  findById(id: string): Promise<Skill | null>;
  create(data: { title: string; description?: string | null }): Promise<Skill>;
  update(id: string, data: { title?: string; description?: string | null }): Promise<Skill>;
  delete(id: string): Promise<void>;
  reorder(orderedIds: string[]): Promise<void>;
}
