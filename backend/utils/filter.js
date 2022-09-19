const filter = (queryString) => {
  const queryObj = { ...queryString };
  const excludedFields = ["page", "sort", "limit", "fields", "keyword"];
  const fields = ["color", "price", "brand"];
  excludedFields.forEach((el) => delete queryObj[el]);
  for (let key in queryObj) {
    if (!fields.includes(key)) {
      throw new Error(`The parameter ${key} is not supported for searching.`);
    }
  }
  return {
    ...queryObj,
  };
};
export default filter;
