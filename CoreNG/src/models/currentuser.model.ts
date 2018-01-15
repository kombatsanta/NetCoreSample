export class CurrentUser implements server.currentUser {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  /** Only for register and login */
  password: string;
}
