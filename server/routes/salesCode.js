const express = require("express");
const router = express.Router();

const { SalesCode } = require("../models/SalesCode");

router.post("/saveSalesCode", (req, res) => {
  //등록할때 필요한 정보들을 client에서 가져와서 데이터베이스에 저장

  //body = client 정보
  const salesCode = new SalesCode(req.body);

  //save 몽고디비 저장 메소드
  salesCode.save((err, doc) => {
    if (err) return res.json({ success: false, err }); //json형식으로 res전달
    return res.status(200).json({ success: true }); //성공
  });
});

router.post("/salesCode", (req, res) => {
  // sales 데이터 가져오기
  SalesCode.find().exec((err, productInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, productInfo });
  });
});

module.exports = router;
