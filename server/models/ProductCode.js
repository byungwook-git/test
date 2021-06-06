const mongoose = require("mongoose");

const productCodeSchema = mongoose.Schema(
  {
    productCode: {
      type: Number,
      maxlength: 11,
      unique: 1,
    },
    productName: {
      type: String,
      maxlength: 50,
    },
    creationDate: {
      type: Number,
      maxlength: 8,
    },
    disposalDate: {
      type: Number,
      maxlength: 8,
    },
    name: {
      type: String,
      maxlength: 50,
    },
  },
  { timestamps: true }
);
//모델이름                                    //스키마
const ProductCode = mongoose.model("ProductCode", productCodeSchema);

//다른곳 사용
module.exports = { ProductCode };
