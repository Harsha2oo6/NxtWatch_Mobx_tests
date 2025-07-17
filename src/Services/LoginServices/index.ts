import { LoginApi } from "../../Constants/Apis";

type LoginDetails = {
  username: string;
  password: string;
};

export const LoginService = async (details: LoginDetails) => {
  const options = {
    method: "POST",
    body: JSON.stringify(details),
  };

  const fetchedData = await fetch(LoginApi, options);

  if (fetchedData.ok) {
    const response = await fetchedData.json();
    return response;
  } else {
    const error = await fetchedData.json();
    throw error;
  }
};
