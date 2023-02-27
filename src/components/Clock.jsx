import React from "react";

function Clock({
  date = new Date(),
  locale = navigator.languages[0],
  options = {
    // year: "numeric",
    // month: "numeric",
    // day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
}) {
  return (
    <div>
      Time at {locale}: {date.toLocaleTimeString(locale, options)}
    </div>
  );
}

export default Clock;
