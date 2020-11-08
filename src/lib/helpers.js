export const getNestedObject = (object, pathArr) =>
  pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    object
  );

export const mapData = (data) => (...keyNames) =>
  data.map((item) => getNestedObject(item, keyNames));
