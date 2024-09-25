import useSearchvalue from "../../hooks/useSearchValue";
import React, { memo } from "preact/compat";
import { RenderSuggestionInputType } from "../../types/commonTypes";
import NotFound from "./NotFound";

const RenderSuggestionInput = ({ searchValue, handleSearchChange, displayData }: RenderSuggestionInputType) => {
  return (
    <article className="searchBarMain">
      <input
        type="search"
        placeholder={"Search here"}
        value={searchValue}
        //   @ts-ignore
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearchChange(e?.target?.value)}
        className="searchBar"
      />
      {searchValue === "" ? <p style={{ "color": "black" }}>Please Search for Software</p> : "" }
      {searchValue !== "" && displayData.length === 0 ? (
        <NotFound text="No result found" />
      ) : (
        <div>
          {searchValue.length > 0 &&
            displayData.length > 0 &&
            displayData.map((item) => {
              return (
                <button
                  tabIndex={1}
                  onClick={() => handleSearchChange(item.designation.title)}
                  key={item.employeeId}
                  dangerouslySetInnerHTML={{
                    __html: useSearchvalue(searchValue, item.designation.title),
                  }}
                ></button>
              );
            })}
        </div>
      )}
    </article>
  );
};

export default memo(RenderSuggestionInput);
