import api from "../api";

export async function CreateRecruit(recruitInfo) {
  console.log(recruitInfo);
  const { data } = await api.post("/api/recruit", recruitInfo);
  console.log(data);
  return data;
}
