export default function sortProducts(data) {
  const processed = {};
  data && data.forEach((item) => {
    if (processed[item.brand]) {
      processed[item.brand].push(item);
    } else {
      processed[item.brand] = [item];
    }
  });
  return processed;
}
