import { useState, useEffect } from "react";

export const useFetch = (url, options) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setState({ data: res, loading: false }));
  }, [url, options, setState]);

  return state;
};
