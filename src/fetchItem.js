"use strict";

const {handleReturn, dynamoDB, TableName} = require("./utils");

const fetchItem = async (event) => {
    const {id} = event.pathParameters;

    try {
        const result = await dynamoDB.get({
            TableName: TableName,
            Key: {id}
        }).promise();
        return handleReturn(200, JSON.stringify(result.Item));
    } catch (error) {
        return handleReturn(500, "An error occur to fetch item: " + error);
    }
};

module.exports = {
    handler: fetchItem
};