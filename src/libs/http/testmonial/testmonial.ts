import { axios } from "../axios";
import { Testmoinal } from "./testmonial.types";

export const testmonial = {
  getTestmonial: (): Promise<{ data: Testmoinal[] }> =>
    axios.get("/api/v1/testmonial"),
};
