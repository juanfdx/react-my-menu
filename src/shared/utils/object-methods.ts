

/*==================================================
  CHECK IF OBJECT IS NOT EMPTY
===================================================*/
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}


/*==================================================
  CHECK IF OBJECT IS VALID
===================================================*/
export const isValidObject = (obj) => {
  return obj !== null && obj !== undefined && Object.keys(obj).length > 0;
}


/*========================================================
  CHECK IF OBJECT KEY EXISTS (true OR false)
========================================================*/
export const keyExists = (obj, key) => {
  return key in obj;
}


/*========================================================
  TRIM OBJECT VALUES
========================================================*/
export const trimValues = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, value.trim().toLowerCase()])
  );
};




