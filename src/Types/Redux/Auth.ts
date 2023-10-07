export interface LoginProps {
  username: string;
  password: string;
}

export interface AuthSliceType {
  loginStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING';
  response: string;
}
