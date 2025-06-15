import apiClient from "./config/ApiClient";

export async function getMenuApiCall() {
  const response = await apiClient.get("/menus", {
    params: {
      populate: "*",
    },
  });
  return response.data;
}
