import { axios } from "../axios";
import { Testmonials } from "./testmonial.types";

export const testmonial = {
  getTestmonial: (): Promise<{ data: Testmonials[] }> =>
    axios.get("/api/v1/testmonial"),
};
