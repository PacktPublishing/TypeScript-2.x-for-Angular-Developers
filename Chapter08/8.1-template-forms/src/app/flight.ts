export class Flight {
  constructor(
    public fullName: string,
    public from: string,
    public to: string,
    public type: string,
    public adults: number,
    public departure: string,
    public children?: number,
    public infants?: number,
    public arrival?: string,
  ) {}
}
