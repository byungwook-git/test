const mongoose = require("mongoose");

const salesCodeSchema = mongoose.Schema(
  {
    salesCode: {
      type: Number,
      maxlength: 8,
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
const SalesCode = mongoose.model("SalesCode", salesCodeSchema);

//다른곳 사용
module.exports = { SalesCode };
