export class Skill {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string | null,
    public createdAt: Date
  ) {}

  static create(props: { title: string; description?: string | null }): Skill {
    return new Skill(crypto.randomUUID(), props.title, props.description ?? null, new Date());
  }
}
