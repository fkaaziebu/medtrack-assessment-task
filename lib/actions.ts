import { nurseSigninQuery } from '@/graphql';
import { GraphQLClient } from 'graphql-request';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return await client.request(query, variables);
  } catch (err) {
    throw err;
  }
};

export const nurseSignin = (email: string, password: string) => {
  return makeGraphQLRequest(nurseSigninQuery, { email, password });
};
