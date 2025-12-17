import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/en";

// Extend dayjs with plugins
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(duration);

// Set default locale
dayjs.locale("en");

/**
 * Format date and time with date, month, year and time (12-hour format with AM/PM)
 * Automatically converts UTC dates from API to local timezone
 * @param date - Date string, Date object, or dayjs object (assumes UTC if string from API)
 * @param format - Optional custom format string (default: "DD MMM YYYY, hh:mm A")
 * @returns Formatted date string in local timezone
 *
 * @example
 * formatDateTime("2024-10-15T14:30:00") // "15 Oct 2024, 02:30 PM" (converted from UTC to local)
 * formatDateTime("2025-12-01T12:57:26.803000") // "01 Dec 2025, 12:57 PM" (converted from UTC to local)
 * formatDateTime(new Date()) // "15 Oct 2024, 02:30 PM"
 */
export const formatDateTime = (
  date: string | Date | dayjs.Dayjs | null | undefined,
  format: string = "DD MMM YYYY, hh:mm A"
): string => {
  if (!date) return "";
  // If it's a string (likely from API), parse as UTC and convert to local
  if (typeof date === "string") {
    return dayjs.utc(date).local().format(format);
  }
  return dayjs(date).format(format);
};

/**
 * Format date only (without time) - date, month and year
 * Automatically converts UTC dates from API to local timezone
 * @param date - Date string, Date object, or dayjs object (assumes UTC if string from API)
 * @param format - Optional custom format string (default: "DD MMM YYYY")
 * @returns Formatted date string in local timezone
 *
 * @example
 * formatDate("2024-10-15") // "15 Oct 2024"
 * formatDate("2025-12-01T12:57:26.803000") // "01 Dec 2025" (converted from UTC to local)
 * formatDate(new Date(), "DD MMMM YYYY") // "15 October 2024" (full month name)
 */
export const formatDate = (
  date: string | Date | dayjs.Dayjs | null | undefined,
  format: string = "DD MMM YYYY"
): string => {
  if (!date) return "";
  // If it's a string (likely from API), parse as UTC and convert to local
  if (typeof date === "string") {
    return dayjs.utc(date).local().format(format);
  }
  return dayjs(date).format(format);
};

/**
 * Format time only (without date) using 12-hour format with AM/PM
 * Automatically converts UTC dates from API to local timezone
 * @param date - Date string, Date object, or dayjs object (assumes UTC if string from API)
 * @param format - Optional custom format string (default: "hh:mm A" - 12-hour format)
 * @returns Formatted time string in local timezone
 *
 * @example
 * formatTime("2024-10-15T14:30:00") // "02:30 PM" (converted from UTC to local)
 * formatTime("2025-12-01T12:57:26.803000") // "12:57 PM" (converted from UTC to local)
 * formatTime(new Date(), "hh:mm:ss A") // "02:30:00 PM" (with seconds)
 */
export const formatTime = (
  date: string | Date | dayjs.Dayjs | null | undefined,
  format: string = "hh:mm A"
): string => {
  if (!date) return "";
  // If it's a string (likely from API), parse as UTC and convert to local
  if (typeof date === "string") {
    return dayjs.utc(date).local().format(format);
  }
  return dayjs(date).format(format);
};

/**
 * Get relative time (e.g., "2 hours ago", "in 3 days")
 * Automatically converts UTC dates from API to local timezone
 * @param date - Date string, Date object, or dayjs object (assumes UTC if string from API)
 * @returns Relative time string
 *
 * @example
 * getRelativeTime("2025-12-01T12:57:26.803000") // "2 hours ago" (converted from UTC to local)
 */
export const getRelativeTime = (
  date: string | Date | dayjs.Dayjs | null | undefined
): string => {
  if (!date) return "";
  // If it's a string (likely from API), parse as UTC and convert to local
  if (typeof date === "string") {
    return dayjs.utc(date).local().fromNow();
  }
  return dayjs(date).fromNow();
};

/**
 * Check if date is valid
 * @param date - Date string, Date object, or dayjs object
 * @returns Boolean indicating if date is valid
 */
export const isValidDate = (
  date: string | Date | dayjs.Dayjs | null | undefined
): boolean => {
  if (!date) return false;
  return dayjs(date).isValid();
};

/**
 * Format duration in seconds to MM:SS format
 * @param seconds - Duration in seconds
 * @returns Formatted duration string (MM:SS)
 *
 * @example
 * formatDuration(300) // "05:00"
 * formatDuration(125) // "02:05"
 * formatDuration(5) // "00:05"
 */
export const formatDuration = (seconds: number): string => {
  const duration = dayjs.duration(seconds, "seconds");
  const mins = Math.floor(duration.asMinutes());
  const secs = duration.seconds();
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

// Export dayjs instance for direct use if needed
export { dayjs };
export default dayjs;
