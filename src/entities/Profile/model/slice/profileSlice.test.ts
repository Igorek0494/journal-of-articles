import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import {
  ProfileSchema,
  updateProfileData,
  ValidateProfileError,
} from "entities/Profile";
import { profileActions, profileReducer } from "./profileSlice";

const data = {
  username: "admin",
  age: 22,
  country: Country.Ukraine,
  lastname: "Kiselev",
  first: "Igor",
  city: "Moscow",
  currency: Currency.RUB,
};

describe("profileSlice.test", () => {
  test("test setReadonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test("test cancelEdit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ readonly: true, validateErrors: undefined, data, form: data });
  });

  test("test updateProfile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "" } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: "123456",
        })
      )
    ).toEqual({ form: { username: "123456" } });
  });

  test("test updateProfile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test updateProfile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      readonly: true,
      isLoading: false,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
