const useSearchValue = (str1: string, str2: string) => {
  let match = str2.toLowerCase().indexOf(str1.toLowerCase());
  if (match !== -1) {
    const wrappedStr1 = str2.slice(match, match + str1.length);
    let wrappedStr = `<span>${wrappedStr1}</span>`;
    let result = str2.slice(0, match) + wrappedStr + str2.slice(match + str1.length);
    return result;
  } else {
    return str2;
  }
};
export default useSearchValue;
