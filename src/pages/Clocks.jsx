import React, { useState, useEffect } from "react";
import Clock from "../components/Clock";

// Timezones for the countries (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (TODO: Turn into objects with country name and timezone: https://www.npmjs.com/package/countries-and-timezones)
const timezones = [
  "Europe/London",
  "Africa/Addis_Ababa",
  "America/Buenos_Aires",
  "Asia/Tokyo",
  "Australia/Sydney",
];

// Languages for the clocks (MUST HAVE COUNTRY CODES!! 'en-GB', not 'en' or 'fr', etc.)
// See https://www.w3.org/International/articles/language-tags/
const locales = [
  // "en-US",
  "en-GB",
  "ko-KR",
  "ar-EG",
  // "ja-JP-u-ca-japanese",
  // ["ban", "id"]
];

function Clocks() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(t);
  }, []);

  return (
    <ul>
      {locales.map((locale) => (
        <Clock date={date} locale={locale} />
      ))}
    </ul>
  );
}

export default Clocks;
