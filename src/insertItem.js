"use strict";

const {handleReturn, v4, dynamoDB, TableName} = require("./utils");

const insertItem = async (event) => {
    const {item} = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4();

    const newItem = {
        id,
        item,
        createdAt,
        itemStatus: false
    };

    try {
        await dynamoDB.put({
            TableName: TableName,
            Item: newItem
        }).promise();
        return handleReturn(200, JSON.stringify(newItem));
    } catch (error) {
        return handleReturn(500, "An error occur to insert item: " + error);
    }
};

module.exports = {
    handler: insertItem
};