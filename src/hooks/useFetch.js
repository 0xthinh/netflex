import { useCallback } from "react";

const useFetch = () => {
  // fetch data from api
  const sendRequest = async (url, executeFn, failFetchFn) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Response is NOT okay");
      }
      const data = await res.json();

      executeFn(data);
    } catch (err) {
      console.error(err);
      failFetchFn();
    }
  };
  return { sendRequest };
};

export default useFetch;
