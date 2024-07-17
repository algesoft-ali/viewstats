export function formatNumberWithCommas(number: number | any = 0) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatNumberShort(number: number | any = 0) {
  if (number >= 1_000_000_000) {
    return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return number.toString();
  }
}
