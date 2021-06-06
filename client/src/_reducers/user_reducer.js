import { SAVE_SALES_CODE, SAVE_PRODUCT_CODE } from "../_actions/types";

const fn = (state = {}, action) => {
  switch (action.type) {
    case SAVE_SALES_CODE:
      return { ...state, saveSalesCode: action.payload };

    case SAVE_PRODUCT_CODE:
      return { ...state, saveProductCode: action.payload };
    default:
      return state;
  }
};
export default fn;
