import { useState, useEffect } from "react";

export const useDebounce = (value: any, dalay: number) => {
  const [debouceData, setDebounceData] = useState<any>();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceData(value);
    }, dalay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, dalay]);
  return debouceData;
};
