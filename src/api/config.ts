import { createApiClient } from "react-query-ease";

export const todosApi = createApiClient({
  baseURL: "https://api.example.com",
});