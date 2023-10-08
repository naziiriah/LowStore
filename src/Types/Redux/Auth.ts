export interface LoginProps {
  username: string;
  password: string;
}

export interface AuthSliceType {
  authStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
  response: string;
}
export interface UserSliceType {
  userStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
  createUserResponse:
    | {
        id: ID;
      }
    | unknown;
  getUserResponse: unknown;
  user: string | boolean;
}

type ID = string | number;
