export class Message {
  constructor(
    public type: string,
    public message: string,
    public room: number,
    public author: string
  ) {}
}
