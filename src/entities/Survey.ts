import { v4 as uuidv4 } from "uuid";

export class Survey {
  id: string;
  title: string;
  description: string;
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
      this.created_at = new Date();
    }
  }
}