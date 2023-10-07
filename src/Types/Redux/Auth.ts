export interface LoginProps {
  username: string;
  password: string;
}

export interface AuthSliceType {
  loginStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
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
}

type ID = string | number;
