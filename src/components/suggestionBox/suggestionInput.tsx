import useFetchHook from "../../hooks/useFetchHook";
import { APIURL } from "../../helpers/consts";
import ErrorComponent from "./ErrorComponent";
import useFilterSearch from "../../hooks/useFilterSearch";
import LoadingComponent from "../common/Loading";
import RenderSuggestionInput from "./RenderSuggestionInput";
import { useEffect, useState } from "preact/hooks";
import { displayDataType } from "../../types/commonTypes";
const SuggestionInput = () => {
  const [data, setData] = useState<{} | { status: string; data: displayDataType }>({});
  const [displayData, setDisplayData] = useState<[] | displayDataType[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function callFetch() {
      const responseData: { status: string; data: displayDataType | {} } = await useFetchHook(APIURL);
      setData(responseData);
    }
    callFetch();
  }, []);

  if (Object.entries(data).length === 0) return <LoadingComponent text="fetching data" />;
  //   @ts-ignore
  if (Object.entries(data).length > 1 && data?.status === "error") return <ErrorComponent />;
  //   @ts-ignore

  const handleSearchChange = (value: string) => {
    // @ts-ignore
    const dataToBeDisplayed = useFilterSearch(data, value);
    setSearchValue(value);
    setDisplayData(dataToBeDisplayed);
  };

  return (
    <RenderSuggestionInput
      searchValue={searchValue}
      handleSearchChange={handleSearchChange}
      displayData={displayData}
    />
  );
};
export default SuggestionInput;
