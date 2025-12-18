/**
 * Format a number as currency with localization support
 * @param value - The numeric value to format
 * @param currency - Currency code (e.g., "usd", "eur", "btc", "eth"). Defaults to "usd"
 * @param locale - Optional locale string (e.g., "en-US", "en-GB", "de-DE", "fr-FR").
 *                 If not provided, uses browser locale or falls back to "en-US"
 * @returns Formatted currency string
 *
 * @example
 * formatCurrency(1234.56, "usd") // "$1,234.56" (en-US) or "1,234.56 $" (fr-FR)
 * formatCurrency(1234.56, "eur", "de-DE") // "1.234,56 €"
 * formatCurrency(0.00123456, "btc") // "₿0.00123456"
 */
export function formatCurrency(
  value: number,
  currency: string = "usd",
  locale?: string
): string {
  // Get locale: use provided locale, or browser locale, or default to en-US
  const selectedLocale =
    locale ??
    (typeof navigator !== "undefined" ? navigator.language : undefined) ??
    "en-US";

  const currencyUpper = currency.toUpperCase();

  // Handle cryptocurrencies (BTC, ETH) - these aren't standard ISO 4217 codes
  if (currencyUpper === "BTC") {
    return `₿${value.toLocaleString(selectedLocale, {
      minimumFractionDigits: 8,
      maximumFractionDigits: 8,
    })}`;
  }

  if (currencyUpper === "ETH") {
    return `Ξ${value.toLocaleString(selectedLocale, {
      minimumFractionDigits: 8,
      maximumFractionDigits: 8,
    })}`;
  }

  // Map currency codes to ISO 4217 format
  // CoinGecko uses lowercase, but Intl.NumberFormat expects uppercase
  // Common currency mappings
  const currencyMap: Record<string, string> = {
    USD: "USD",
    EUR: "EUR",
    GBP: "GBP",
    JPY: "JPY",
    CNY: "CNY",
    INR: "INR",
    KRW: "KRW",
    AUD: "AUD",
    CAD: "CAD",
    CHF: "CHF",
    SEK: "SEK",
    NZD: "NZD",
    MXN: "MXN",
    BRL: "BRL",
    RUB: "RUB",
    ZAR: "ZAR",
    TRY: "TRY",
    PLN: "PLN",
    NOK: "NOK",
    DKK: "DKK",
  };

  const isoCurrency = currencyMap[currencyUpper] ?? currencyUpper;

  // Format with Intl.NumberFormat for proper localization
  try {
    return new Intl.NumberFormat(selectedLocale, {
      style: "currency",
      currency: isoCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    // Fallback for invalid currency codes
    return (
      new Intl.NumberFormat(selectedLocale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value) + ` ${isoCurrency}`
    );
  }
}

export function formatPercentage(value: number): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

export function formatNumber(value: number): string {
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(2)}T`;
  }
  if (value >= 1e9) {
    return `${(value / 1e9).toFixed(2)}B`;
  }
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`;
  }
  if (value >= 1e3) {
    return `${(value / 1e3).toFixed(2)}K`;
  }
  return value.toFixed(2);
}
