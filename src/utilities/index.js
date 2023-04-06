export const displayPrice = (sum) => {
  return sum > 0 ? `(${sum} €)` : "";
};

// 1199.00 => 1 199,00
export function formatPrice(val) {
  let parts = val.toFixed(2).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(",");
}

// "512ssd" => 512 Go | "2tossd" => 2 To
export const formatSsdString = (ssdString) => {
  // si SSD on le retire: 512ssd => 512
  const numPart = ssdString.replace("ssd", "");

  // 2tossd => 2to
  if (numPart.includes("to")) {
    return `${numPart.charAt(0)} To`;
  }
  return `${numPart} Go`;
};
