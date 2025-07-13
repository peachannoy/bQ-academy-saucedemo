export const users = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  lockedOutUser: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  invalidUser: {
    username: 'invalid_user',
    password: 'wrong_password'
  }
};

export enum LoginResult {
  Success ,
  LockedOut,
  InvalidCredentials 
}