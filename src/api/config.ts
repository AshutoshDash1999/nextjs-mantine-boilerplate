import { createApiClient } from "react-query-ease";

export const coingeckoApi = createApiClient({
  baseURL:
    process.env.NEXT_PUBLIC_COINGECKO_API_URL ||
    "https://api.coingecko.com/api/v3",
  headers: {
    "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO_API_KEY || "",
  },
});
