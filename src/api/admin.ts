import axios from "axios";

type loginAdminType = (p: string) => Promise<{
  token: string;
}>;

export const loginAdmin: loginAdminType = async (secret: string) => {
  const url = process.env.REACT_APP_ADMIN_ENDPOINT;
  if (!url) throw new Error("Endpoint for admin is missing");
  return axios.post(url, { secret }).then((res) => res.data);
};

type validateTokenType = (p: string) => Promise<{
  message: string;
}>;

export const validateToken: validateTokenType = async (token: string) => {
  const url = process.env.REACT_APP_ADMIN_ENDPOINT;
  if (!url) throw new Error("Endpoint for admin is missing");
  return axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);
};
