export function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}
