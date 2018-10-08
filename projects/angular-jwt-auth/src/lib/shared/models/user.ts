// todo: revisar roles

export enum Role {
  Administrator = 'Administrator',
  Developer = 'Developer'
}

export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  token?: string;
}
