import dayjs from "dayjs";
import type { NextRequest } from "next/server";

// Type definition for geolocation response
interface GeolocationResponse {
  city: string | null;
  state: string | null;
  country: string | null;
  countryCode: string | null;
  region: string | null;
  coordinates: {
    latitude: number | null;
    longitude: number | null;
  };
  timezone: string | null;
  currency: string;
  language: string;
  metadata: {
    source: string;
    timestamp: string;
    hasCoordinates: boolean;
    hasLocation: boolean;
  };
}

/**
 * Get currency and language for a country code using switch cases
 * Returns both currency (ISO 4217) and language (ISO 639-1) codes
 */
function getCurrencyAndLanguageFromCountryCode(countryCode: string | null): {
  currency: string;
  language: string;
} {
  if (!countryCode) {
    return {
      currency: "usd",
      language: "en",
    };
  }

  const upperCountryCode = countryCode.toUpperCase();

  switch (upperCountryCode) {
    // English-speaking countries
    case "US": // United States
      return {
        currency: "usd", // US Dollar
        language: "en", // English
      };
    case "GB": // United Kingdom
      return {
        currency: "gbp", // British Pound
        language: "en", // English
      };
    case "AU": // Australia
      return {
        currency: "aud", // Australian Dollar
        language: "en", // English
      };
    case "NZ": // New Zealand
      return {
        currency: "nzd", // New Zealand Dollar
        language: "en", // English
      };
    case "IE": // Ireland
      return {
        currency: "eur", // Euro
        language: "en", // English
      };
    case "ZA": // South Africa
      return {
        currency: "zar", // South African Rand
        language: "en", // English
      };
    case "SG": // Singapore
      return {
        currency: "sgd", // Singapore Dollar
        language: "en", // English
      };
    case "CA": // Canada (Language handled separately for Quebec)
      return {
        currency: "cad", // Canadian Dollar
        language: "en", // English
      };

    // Spanish-speaking countries
    case "ES": // Spain
      return {
        currency: "eur", // Euro
        language: "es", // Spanish
      };
    case "MX": // Mexico
      return {
        currency: "mxn", // Mexican Peso
        language: "es", // Spanish
      };
    case "AR": // Argentina
      return {
        currency: "ars", // Argentine Peso
        language: "es", // Spanish
      };
    case "CO": // Colombia
      return {
        currency: "cop", // Colombian Peso
        language: "es", // Spanish
      };
    case "CL": // Chile
      return {
        currency: "clp", // Chilean Peso
        language: "es", // Spanish
      };
    case "PE": // Peru
      return {
        currency: "pen", // Peruvian Sol
        language: "es", // Spanish
      };
    case "VE": // Venezuela
      return {
        currency: "usd", // US Dollar (unofficially)
        language: "es", // Spanish
      };
    case "EC": // Ecuador
      return {
        currency: "usd", // US Dollar
        language: "es", // Spanish
      };
    case "GT": // Guatemala
      return {
        currency: "gtq", // Guatemalan Quetzal
        language: "es", // Spanish
      };
    case "CU": // Cuba
      return {
        currency: "cup", // Cuban Peso
        language: "es", // Spanish
      };
    case "BO": // Bolivia
      return {
        currency: "bob", // Bolivian Boliviano
        language: "es", // Spanish
      };
    case "DO": // Dominican Republic
      return {
        currency: "dop", // Dominican Peso
        language: "es", // Spanish
      };
    case "HN": // Honduras
      return {
        currency: "hnl", // Honduran Lempira
        language: "es", // Spanish
      };
    case "PY": // Paraguay
      return {
        currency: "pyg", // Paraguayan Guaraní
        language: "es", // Spanish
      };
    case "SV": // El Salvador
      return {
        currency: "svc", // Salvadoran Colón
        language: "es", // Spanish
      };
    case "NI": // Nicaragua
      return {
        currency: "nio", // Nicaraguan Córdoba
        language: "es", // Spanish
      };
    case "CR": // Costa Rica
      return {
        currency: "crc", // Costa Rican Colón
        language: "es", // Spanish
      };
    case "PA": // Panama
      return {
        currency: "pab", // Panamanian Balboa
        language: "es", // Spanish
      };
    case "UY": // Uruguay
      return {
        currency: "uyu", // Uruguayan Peso
        language: "es", // Spanish
      };

    // French-speaking countries
    case "FR": // France
      return {
        currency: "eur", // Euro
        language: "fr", // French
      };
    case "BE": // Belgium
      return {
        currency: "eur", // Euro
        language: "fr", // French
      };
    case "CH": // Switzerland (multilingual)
      return {
        currency: "chf", // Swiss Franc
        language: "de", // German
      };

    // Portuguese-speaking countries
    case "PT": // Portugal
      return {
        currency: "eur", // Euro
        language: "pt", // Portuguese
      };
    case "BR": // Brazil
      return {
        currency: "brl", // Brazilian Real
        language: "pt", // Portuguese
      };
    case "AO": // Angola
      return {
        currency: "aoa", // Angolan Kwanza
        language: "pt", // Portuguese
      };
    case "MZ": // Mozambique
      return {
        currency: "mzn", // Mozambican Metical
        language: "pt", // Portuguese
      };

    // German-speaking countries
    case "DE": // Germany
      return {
        currency: "eur", // Euro
        language: "de", // German
      };
    case "AT": // Austria
      return {
        currency: "eur", // Euro
        language: "de", // German
      };
    case "LI": // Liechtenstein
      return {
        currency: "chf", // Swiss Franc
        language: "de", // German
      };

    // Italian
    case "IT": // Italy
      return {
        currency: "eur", // Euro
        language: "it", // Italian
      };
    case "SM": // San Marino
      return {
        currency: "eur", // Euro
        language: "it", // Italian
      };
    case "VA": // Vatican City
      return {
        currency: "eur", // Euro
        language: "it", // Italian
      };

    // Russian
    case "RU": // Russia
      return {
        currency: "rub", // Russian Ruble
        language: "ru", // Russian
      };
    case "BY": // Belarus
      return {
        currency: "byn", // Belarusian Ruble
        language: "ru", // Russian
      };
    case "KZ": // Kazakhstan
      return {
        currency: "kzt", // Kazakhstani Tenge
        language: "ru", // Russian
      };
    case "KG": // Kyrgyzstan
      return {
        currency: "kgs", // Kyrgyzstani Som
        language: "ru", // Russian
      };
    case "TJ": // Tajikistan
      return {
        currency: "tjs", // Tajikistani Somoni
        language: "ru", // Russian
      };

    // Chinese
    case "CN": // China
      return {
        currency: "cny", // Chinese Yuan
        language: "zh", // Chinese
      };
    case "TW": // Taiwan
      return {
        currency: "twd", // New Taiwan Dollar
        language: "zh", // Chinese
      };
    case "HK": // Hong Kong
      return {
        currency: "hkd", // Hong Kong Dollar
        language: "zh", // Chinese
      };
    case "MO": // Macau
      return {
        currency: "mop", // Macanese Pataca
        language: "zh", // Chinese
      };

    // Japanese
    case "JP": // Japan
      return {
        currency: "jpy", // Japanese Yen
        language: "ja", // Japanese
      };

    // Korean
    case "KR": // South Korea
      return {
        currency: "krw", // South Korean Won
        language: "ko", // Korean
      };
    case "KP": // North Korea
      return {
        currency: "kpw", // North Korean Won
        language: "ko", // Korean
      };

    // Arabic-speaking countries
    case "SA": // Saudi Arabia
      return {
        currency: "sar", // Saudi Riyal
        language: "ar", // Arabic
      };
    case "AE": // United Arab Emirates
      return {
        currency: "aed", // UAE Dirham
        language: "ar", // Arabic
      };
    case "EG": // Egypt
      return {
        currency: "egp", // Egyptian Pound
        language: "ar", // Arabic
      };
    case "IQ": // Iraq
      return {
        currency: "iqd", // Iraqi Dinar
        language: "ar", // Arabic
      };
    case "JO": // Jordan
      return {
        currency: "jod", // Jordanian Dinar
        language: "ar", // Arabic
      };
    case "LB": // Lebanon
      return {
        currency: "lbp", // Lebanese Pound
        language: "ar", // Arabic
      };
    case "KW": // Kuwait
      return {
        currency: "kwd", // Kuwaiti Dinar
        language: "ar", // Arabic
      };
    case "OM": // Oman
      return {
        currency: "omr", // Omani Rial
        language: "ar", // Arabic
      };
    case "QA": // Qatar
      return {
        currency: "qar", // Qatari Riyal
        language: "ar", // Arabic
      };
    case "SY": // Syria
      return {
        currency: "syp", // Syrian Pound
        language: "ar", // Arabic
      };
    case "YE": // Yemen
      return {
        currency: "yer", // Yemeni Rial
        language: "ar", // Arabic
      };
    case "BH": // Bahrain
      return {
        currency: "bhd", // Bahraini Dinar
        language: "ar", // Arabic
      };
    case "DZ": // Algeria
      return {
        currency: "dzd", // Algerian Dinar
        language: "ar", // Arabic
      };
    case "MA": // Morocco
      return {
        currency: "mad", // Moroccan Dirham
        language: "ar", // Arabic
      };
    case "TN": // Tunisia
      return {
        currency: "tnd", // Tunisian Dinar
        language: "ar", // Arabic
      };
    case "LY": // Libya
      return {
        currency: "lyd", // Libyan Dinar
        language: "ar", // Arabic
      };
    case "SD": // Sudan
      return {
        currency: "sdg", // Sudanese Pound
        language: "ar", // Arabic
      };

    // India - language handled separately for regions
    case "IN": // India
      return {
        currency: "inr", // Indian Rupee
        language: "hi", // Hindi
      };

    // Other major Asian languages
    case "TH": // Thailand
      return {
        currency: "thb", // Thai Baht
        language: "th", // Thai
      };
    case "VN": // Vietnam
      return {
        currency: "vnd", // Vietnamese Dong
        language: "vi", // Vietnamese
      };
    case "ID": // Indonesia
      return {
        currency: "idr", // Indonesian Rupiah
        language: "id", // Indonesian
      };
    case "MY": // Malaysia
      return {
        currency: "myr", // Malaysian Ringgit
        language: "ms", // Malay
      };
    case "BN": // Brunei
      return {
        currency: "bnd", // Brunei Dollar
        language: "ms", // Malay
      };
    case "PH": // Philippines
      return {
        currency: "php", // Philippine Peso
        language: "tl", // Tagalog
      };

    // Turkish
    case "TR": // Turkey
      return {
        currency: "try", // Turkish Lira
        language: "tr", // Turkish
      };
    case "CY": // Cyprus
      return {
        currency: "eur", // Euro
        language: "el", // Greek
      };

    // Polish
    case "PL": // Poland
      return {
        currency: "pln", // Polish Złoty
        language: "pl", // Polish
      };

    // Dutch
    case "NL": // Netherlands
      return {
        currency: "eur", // Euro
        language: "nl", // Dutch
      };

    // Greek
    case "GR": // Greece
      return {
        currency: "eur", // Euro
        language: "el", // Greek
      };

    // Hebrew
    case "IL": // Israel
      return {
        currency: "ils", // Israeli Shekel
        language: "he", // Hebrew
      };

    // Persian/Farsi
    case "IR": // Iran
      return {
        currency: "irr", // Iranian Rial
        language: "fa", // Persian/Farsi
      };
    case "AF": // Afghanistan
      return {
        currency: "afn", // Afghan Afghani
        language: "fa", // Persian/Farsi
      };

    // Urdu (Pakistan)
    case "PK": // Pakistan
      return {
        currency: "pkr", // Pakistani Rupee
        language: "ur", // Urdu
      };

    // Bengali
    case "BD": // Bangladesh
      return {
        currency: "bdt", // Bangladeshi Taka
        language: "bn", // Bengali
      };

    // Swahili (East Africa)
    case "KE": // Kenya
      return {
        currency: "kes", // Kenyan Shilling
        language: "sw", // Swahili
      };
    case "TZ": // Tanzania
      return {
        currency: "tzs", // Tanzanian Shilling
        language: "sw", // Swahili
      };
    case "UG": // Uganda
      return {
        currency: "ugx", // Ugandan Shilling
        language: "sw", // Swahili
      };

    // Romanian
    case "RO": // Romania
      return {
        currency: "ron", // Romanian Leu
        language: "ro", // Romanian
      };
    case "MD": // Moldova
      return {
        currency: "mdl", // Moldovan Leu
        language: "ro", // Romanian
      };

    // Czech
    case "CZ": // Czech Republic
      return {
        currency: "czk", // Czech Koruna
        language: "cs", // Czech
      };

    // Hungarian
    case "HU": // Hungary
      return {
        currency: "huf", // Hungarian Forint
        language: "hu", // Hungarian
      };

    // Swedish
    case "SE": // Sweden
      return {
        currency: "sek", // Swedish Krona
        language: "sv", // Swedish
      };

    // Norwegian
    case "NO": // Norway
      return {
        currency: "nok", // Norwegian Krone
        language: "no", // Norwegian
      };

    // Danish
    case "DK": // Denmark
      return {
        currency: "dkk", // Danish Krone
        language: "da", // Danish
      };

    // Finnish
    case "FI": // Finland
      return {
        currency: "eur", // Euro
        language: "fi", // Finnish
      };

    // Ukrainian
    case "UA": // Ukraine
      return {
        currency: "uah", // Ukrainian Hryvnia
        language: "uk", // Ukrainian
      };

    // Amharic (Ethiopia)
    case "ET": // Ethiopia
      return {
        currency: "etb", // Ethiopian Birr
        language: "am", // Amharic
      };

    // Hausa (Nigeria)
    case "NG": // Nigeria
      return {
        currency: "ngn", // Nigerian Naira
        language: "ha", // Hausa
      };

    // Zimbabwe
    case "ZW": // Zimbabwe
      return {
        currency: "zwl", // Zimbabwean Dollar
        language: "en", // English
      };

    // Eurozone countries (default to English if not specified above)
    case "EU":
    default:
      return {
        currency: "usd", // US Dollar
        language: "en", // English
      };
  }
}

export async function GET(request: NextRequest) {
  try {
    // Read Vercel request headers directly
    // Reference: https://vercel.com/docs/headers/request-headers
    const headers = request.headers;

    // Geographic location data
    const city = headers.get("x-vercel-ip-city");
    const country = headers.get("x-vercel-ip-country");
    const countryRegion = headers.get("x-vercel-ip-country-region");
    const region = headers.get("x-vercel-ip-country-region");

    // Coordinates from headers
    const latitudeHeader = headers.get("x-vercel-ip-latitude");
    const longitudeHeader = headers.get("x-vercel-ip-longitude");
    const latitude = latitudeHeader ? parseFloat(latitudeHeader) : null;
    const longitude = longitudeHeader ? parseFloat(longitudeHeader) : null;

    // Timezone from headers
    const timezone = headers.get("x-vercel-ip-timezone");

    // Get country code (2-letter ISO code)
    const countryCode = country || null;

    // Get currency and language from country code using switch cases
    const { currency, language } =
      getCurrencyAndLanguageFromCountryCode(countryCode);

    // Build comprehensive response
    const locationData: GeolocationResponse = {
      // Basic location info
      city: city || null,
      state: region || countryRegion || null,
      country: country || null,
      countryCode: countryCode || null,
      region: region || countryRegion || null,

      // Geographic coordinates from x-vercel-ip-latitude and x-vercel-ip-longitude
      coordinates: {
        latitude,
        longitude,
      },

      // Timezone from x-vercel-ip-timezone
      timezone: timezone || null,

      // Currency mapped from country code
      currency,

      // Language detected from Accept-Language header or country code
      language,

      // Additional metadata
      metadata: {
        source: "vercel-request-headers",
        timestamp: dayjs().format("DD MMM YYYY, HH:mm:ss"),
        hasCoordinates: !!(latitude && longitude),
        hasLocation: !!(city || country),
      },
    };

    return Response.json(locationData, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Geolocation error:", error);

    // Return fallback response
    return Response.json(
      {
        error: "Unable to determine location",
        message: error instanceof Error ? error.message : "Unknown error",
        fallback: {
          countryCode: "US",
          currency: "usd",
          language: "en",
        },
      },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
