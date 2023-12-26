import { displayDataType } from "../types/commonTypes";

const useFilterSearch = (data: { status: string; data: displayDataType }, value: string) => {
  // @ts-ignore
  return data.data.filter((item) => {
    return item.designation.title.toLowerCase().includes(value.toLowerCase());
  });
};
export default useFilterSearch;
