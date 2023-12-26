import { displayDataType } from "../types/commonTypes";

const ReturnObj = (status: string, data: displayDataType | {}) => {
  return {
    status,
    data,
  };
};
const useFetchHook = async (url: string) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log("api result", data[0], result, "url", url);
    return ReturnObj("success", data);
  } catch (e) {
    console.error("Error while getting Response", e);
    return ReturnObj("failed", {});
  }
};
export default useFetchHook;
