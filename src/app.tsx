import { Suspense, memo } from "preact/compat";
import LoadingComponent from "./components/common/Loading";
import SuggestionInput from "./components/suggestionBox";

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingComponent text="Loading" />}>
        <SuggestionInput />
      </Suspense>
    </>
  );
};
export default memo(App);
