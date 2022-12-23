const express = require("express");
const model = require("../model/schema");

const resend = async (req, res) => {
  const { code } = req.params;
  try {
    const url = await model.findOne({
      urlCode: code,
    });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json({ status: "url not found" });
    }
  } catch (error) {
    res.status(500).json("Server Error");
  }
};

module.exports = resend;
