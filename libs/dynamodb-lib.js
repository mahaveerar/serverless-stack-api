import AWS from "aws-sdk";

export function call(action, params) {
  AWS.config.update({ region: "ap-south-1" });//added
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}