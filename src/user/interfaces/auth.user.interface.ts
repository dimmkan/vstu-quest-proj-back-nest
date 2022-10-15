export interface authUser {
  isAuth: boolean;
  userId: number;
  userName: string;
  role: 'admin' | 'kadry' | 'security';
}
