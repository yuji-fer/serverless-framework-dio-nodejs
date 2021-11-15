"use strict";

const AWS = require("aws-sdk");
const {v4} = require("uuid");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TableName = "ItemTable";

const handleReturn = (statusCode, message) => {
    return {
        statusCode: statusCode,
        body: message
    };
};

module.exports = {
    handleReturn,
    v4,
    dynamoDB,
    TableName
}