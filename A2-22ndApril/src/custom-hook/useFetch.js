import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  data: []
};

function apiReducer(state, action) {
  switch (action.type) {
    case "FETCHING_DATA":
      return { ...state, loading: true };
    case "FETCHING_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "FETCHING_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
}

export function useFetch(url) {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });

    fetch(url)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(json => {
        dispatch({ type: "FETCHING_SUCCESS", payload: json });
      })
      .catch(error => {
        dispatch({ type: "FETCHING_FAIL", payload: error.message });
      });
  }, [url]);

  return state;
}