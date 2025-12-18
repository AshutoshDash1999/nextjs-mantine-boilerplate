import { coingeckoApi } from "../config";

// Types
export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
};

export type TrendingCoin = {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
  };
};

export type TrendingResponse = {
  coins: TrendingCoin[];
  exchanges: unknown[];
};

export type CoinDetails = {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  description: {
    en: string;
  };
  market_data: {
    current_price: Record<string, number>;
    market_cap: Record<string, number>;
    total_volume: Record<string, number>;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    high_24h: Record<string, number>;
    low_24h: Record<string, number>;
    circulating_supply: number;
    total_supply: number;
    max_supply: number | null;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
  };
};

export type MarketsParams = {
  vs_currency?: string;
  order?:
    | "market_cap_desc"
    | "gecko_desc"
    | "gecko_asc"
    | "market_cap_asc"
    | "market_cap_desc"
    | "volume_asc"
    | "volume_desc"
    | "id_asc"
    | "id_desc";
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: string;
};

// Hooks
export const useMarkets = (params?: MarketsParams) => {
  const query = coingeckoApi.useQuery<Coin[]>({
    url: "/coins/markets",
    method: "GET",
    key: [
      "coins",
      "markets",
      params,
    ],
    params: {
      vs_currency: params?.vs_currency || "usd",
      order: params?.order || "market_cap_desc",
      per_page: params?.per_page || 100,
      page: params?.page || 1,
      sparkline: params?.sparkline || false,
      price_change_percentage: params?.price_change_percentage || "24h",
    },
  });

  return {
    coins: query.data ?? [],
    isMarketsLoading: query.isLoading,
    ...query,
  };
};

export const useTrending = () => {
  const query = coingeckoApi.useQuery<TrendingResponse>({
    url: "/trending",
    method: "GET",
    key: [
      "coins",
      "trending",
    ],
  });

  return {
    trendingCoins: query.data?.coins ?? [],
    isTrendingLoading: query.isLoading,
    ...query,
  };
};

export const useCoinDetails = (coinId: string) => {
  const query = coingeckoApi.useQuery<CoinDetails>({
    url: `/coins/${coinId}`,
    method: "GET",
    key: [
      "coins",
      coinId,
    ],
    params: {
      localization: false,
      tickers: false,
      market_data: true,
      community_data: false,
      developer_data: false,
      sparkline: false,
    },
  });

  return {
    coinDetails: query.data,
    isCoinDetailsLoading: query.isLoading,
    ...query,
  };
};

export const useSimplePrice = (
  coinIds: string[],
  vsCurrencies: string[] = [
    "usd",
  ]
) => {
  const query = coingeckoApi.useQuery<Record<string, Record<string, number>>>({
    url: "/simple/price",
    method: "GET",
    key: [
      "simple",
      "price",
      coinIds,
      vsCurrencies,
    ],
    params: {
      ids: coinIds.join(","),
      vs_currencies: vsCurrencies.join(","),
      include_24hr_change: true,
      include_24hr_vol: true,
      include_last_updated_at: true,
    },
  });

  return {
    prices: query.data ?? {},
    isSimplePriceLoading: query.isLoading,
    ...query,
  };
};
