// Prefix an internal path with the site's base path, so links keep working
// when the site is served from a sub-folder (e.g. GitHub Pages project sites).
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

// Dates are stored as calendar days, so format in UTC to avoid
// shifting a day in the reader's timezone.
export function formatDate(
  date: Date,
  style: "long" | "short" = "long",
): string {
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: style === "long" ? "long" : "short",
    day: "numeric",
  });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
