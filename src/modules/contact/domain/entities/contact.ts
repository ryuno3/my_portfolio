export class Contact {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public message: string,
    public createdAt: Date
  ) {}

  static create(props: { name: string; email: string; message: string }): Contact {
    return new Contact(crypto.randomUUID(), props.name, props.email, props.message, new Date());
  }
}
