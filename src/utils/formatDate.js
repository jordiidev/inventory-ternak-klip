export const formatDate = (date) =>
  new Date(date)
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(",", " -");
