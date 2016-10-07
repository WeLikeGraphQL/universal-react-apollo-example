import { introspectionQuery } from 'graphql/utilities';
import request from 'sync-request';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || 'graphql';
const GRAHPQL_PORT = process.env.GRAHPQL_PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';

const response = request('POST', `${HOST}:${GRAHPQL_PORT}/${GRAPHQL_ENDPOINT}`, {
  json: {
    query: introspectionQuery
  }
});

const schema = response.body.toString('utf-8');

fs.writeFileSync(
  path.join(__dirname, '../schema/schema.json'),
  schema
);
