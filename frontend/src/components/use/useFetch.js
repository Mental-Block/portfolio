import { useState, useEffect } from "react";

export const useFetch = (path, options) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(`${window.location.origin}/${path}`, options)
      .then((res) => res.json())
      .then((res) => setState({ data: res, loading: false }));
  }, [path, options, setState]);

  return state;
};
