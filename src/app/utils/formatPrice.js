export function formatPrice(value) {
  if (value === null || value === undefined || value === "") return "";

  return Number(value).toLocaleString("en-US");
}