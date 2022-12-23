const express = require("express");
const validURL = require("valid-url");
const shortID = require("shortid");
const model = require("../model/schema");

const baseUrl = "http:localhost:3003";

const shortURL = async (req, res) => {
  const { input } = req.body;

  if (!validURL.isUri(baseUrl)) {
    return res.status(401).json("Invalid base URL");
  }

  const URLcode = shortID.generate();
  //   let url = await model.findOne({ longUrl: input });

  if (validURL.isUri(input)) {
    try {
      let url = await model.findOne({ longUrl: input });

      if (url) {
        res.json(url);
      } else {
        const shortURL = baseUrl + "/" + URLcode;

        url = new model({
          urlCode: URLcode,
          longUrl: input,
          shortUrl: shortURL,
          date: new Date(),
        });
        await url.save();
        res.json(url);

        console.log(shortURL);
      }
    } catch (error) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(401).json("Invalid longUrl");
  }
};

module.exports = shortURL;
