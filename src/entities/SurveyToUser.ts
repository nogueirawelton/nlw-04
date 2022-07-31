import { v4 as uuidv4 } from "uuid";

export class SurveyToUser {
  id: string;
  value: number;
  created_at: Date;
  user_id: string;
  survey_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.created_at = new Date();
    }
  }
}