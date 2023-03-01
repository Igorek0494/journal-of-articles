import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<Profile>("/profile");

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue(i18n.t("error"));
  }
});
