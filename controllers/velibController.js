const express = require("express");
const {callVelibApi} = require("../services/velibApiManager.js");
const {uploadFileInBucket} = require("../services/bucketManager.js");

async function callVelibAction (req, res) {
    try {
        let datas = await callVelibApi();
        uploadFileInBucket(datas);
    } catch (err) {
        res.status(500);
    }
    
    res.status(200).json({"message": "Save OK"});
}

module.exports = {
    callVelibAction
};