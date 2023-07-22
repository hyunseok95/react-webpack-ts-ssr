import { createReducer } from "../lib/store/reducer";

export interface ServerSideProps {
  url: string;
  params?: any;
  isServer: boolean;
}

export const {
  patch: patchHD,
  put: putHD,
  putDefault: putDefaultHD,
  reducer: HDReducer,
} = createReducer("HD", {
  HD: {
    url: "",
  },
});
