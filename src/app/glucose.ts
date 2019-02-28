export class Glucose {

  id: number;
  userId: number;
  level: number;
  categoryId: number;
  tags: string;
  published: number;
  added: string;

  constructor(values: Object  = {}) {
    Object.assign(this, values);
  }

}
