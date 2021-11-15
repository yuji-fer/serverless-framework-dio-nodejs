"use strict";

const {handleReturn, dynamoDB, TableName} = require("./utils");

const fetchItems = async (event) => {
    try {
        const results = await dynamoDB.scan({
            TableName: TableName
        }).promise();
        return handleReturn(200, JSON.stringify(results.Items));
    } catch (error) {
        return handleReturn(500, "An error occur to fetch items: " + error);
    }
};

module.exports = {
    handler: fetchItems
};