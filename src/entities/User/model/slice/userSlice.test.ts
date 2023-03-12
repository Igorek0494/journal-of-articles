import { UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

describe('userSlice.test', () => {
  test('test setAuthData', () => {
    const state: DeepPartial<UserSchema> = { authData: { id: '123', username: 'xaker' } };
    expect(
      userReducer(state as UserSchema, userActions.setAuthData({ id: '12356', username: 'igor' })),
    ).toEqual({ authData: { id: '12356', username: 'igor' } });
  });

  test('test initAuthData', () => {
    const state: DeepPartial<UserSchema> = { };
    expect(
      userReducer(state as UserSchema, userActions.initAuthData()),
    ).toEqual({});
  });

  test('test logout', () => {
    const state: DeepPartial<UserSchema> = { authData: { id: '456', username: 'Igor' } };
    expect(
      userReducer(state as UserSchema, userActions.logout()),
    ).toEqual({ authData: undefined });
  });
});
