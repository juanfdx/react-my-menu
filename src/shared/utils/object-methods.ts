

/*==================================================
  CHECK IF OBJECT IS NOT EMPTY
===================================================*/
export const isEmptyObject = (obj: any): boolean => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}


/*==================================================
  CHECK IF OBJECT IS VALID
===================================================*/
export const isValidObject = (obj: any): boolean => {
  return obj !== null && obj !== undefined && Object.keys(obj).length > 0;
}


/*========================================================
  CHECK IF OBJECT KEY EXISTS (true OR false)
========================================================*/
export const keyExists = (obj: any, key: string): boolean => {
  return key in obj;
}


/*========================================================
  TRIM OBJECT VALUES JAVASCRIPT
========================================================*/
export const trimValues = (obj: any): any => {
  return Object.fromEntries(
    //@ts-ignore
    Object.entries(obj).map(([key, value]) => [key, value.trim().toLowerCase()])
  );
};





