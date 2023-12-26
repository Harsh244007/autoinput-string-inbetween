export type displayDataType={
    employeeId:number;
    designation:{title:string}
}
export type RenderSuggestionInputType = {
  searchValue: string;
  handleSearchChange: (value: string) => void;
  displayData: [] | displayDataType[];
};