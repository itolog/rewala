
export interface AuthState {
  isAuth: boolean | null;
  token: string | null;
  error: string | null;
  data: any;
}
