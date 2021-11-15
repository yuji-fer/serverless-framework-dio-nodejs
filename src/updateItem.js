"use strict";

const {handleReturn, dynamoDB, TableName} = require("./utils");

const updateItem = async (event) => {
    const {itemStatus} = JSON.parse(event.body);
    const {id} = event.pathParameters;

    try {
        await dynamoDB.update({
            TableName: TableName,
            Key: {id},
            UpdateExpression: 'set itemStatus = :itemStatus',
            ExpressionAttributeValues: {
                ':itemStatus': itemStatus
            },
            ReturnValues: "ALL_NEW"
        }).promise();
        return handleReturn(200, JSON.stringify({ msg: "Item updated" }));
    } catch (error) {
        return handleReturn(500, "An error occur to update item: " + error);
    }
};

module.exports = {
    handler: updateItem
};