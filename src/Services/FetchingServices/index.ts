import { loginStore } from "../../Stores/LoginStore/loginstore";

export const FetchDetails = async (url: string) => {
  const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${loginStore.getToken()}`,
  },
};
  const fetchedData = await fetch(url, options);

  if (fetchedData.ok) {
    const response = await fetchedData.json();
    return response;
  } else {
    const error = await fetchedData.json();
    throw error;
  }
};
