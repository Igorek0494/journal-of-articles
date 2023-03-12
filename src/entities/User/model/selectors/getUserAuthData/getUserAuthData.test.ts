import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
  test('should work with fulled state', () => {
    const state: DeepPartial<StateSchema> = {
        user: {
            authData: { id: '123', username: 'Igor' },
        },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({ id: '123', username: 'Igor' });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
