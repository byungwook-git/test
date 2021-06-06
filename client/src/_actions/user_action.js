import axios from "axios";

import { SAVE_SALES_CODE, SAVE_PRODUCT_CODE } from "./types";

export function saveSalesCode(dataToSubmit) {
  const request = axios
    .post("/api/sales/saveSalesCode", dataToSubmit)
    .then((response) => response.data);

  return {
    type: SAVE_SALES_CODE,
    payload: request,
  };
}

export function saveProductCode(dataToSubmit) {
  const request = axios
    .post("/api/product/saveProductCode", dataToSubmit)
    .then((response) => response.data);

  return {
    type: SAVE_PRODUCT_CODE,
    payload: request,
  };
}
