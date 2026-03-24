export interface UserResponse {
  id: string;
  username: string;
}

export interface CreateUserPayload {
  username: string;
  password: string;
}

export interface UpdateUserPasswordPayload {
  newPassword: string;
}
