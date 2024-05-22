import {
  nurseSigninQuery,
  nurseProfileQuery,
  patientVisitQuery,
  patientDataQuery,
} from '@/graphql';
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

export const nurseProfile = (token: string | null) => {
  client.setHeader('Authorization', `Bearer ${token}`);

  return makeGraphQLRequest(nurseProfileQuery);
};

export const patientReviewInfo = (
  token: string | null,
  visitId: string | null,
  healthFacilityId: number | null,
  getPatientDoctorVisitId: number | null
) => {
  client.setHeader('Authorization', `Bearer ${token}`);

  return makeGraphQLRequest(patientVisitQuery, {
    visitId,
    healthFacilityId,
    getPatientDoctorVisitId,
  });
};

export const patientData = (
  token: string | null,
  visitId: string | null,
  healthFacilityId: number | null,
  getPatientDoctorVisitId: number | null
) => {
  client.setHeader('Authorization', `Bearer ${token}`);

  return makeGraphQLRequest(patientDataQuery, {
    visitId,
    healthFacilityId,
    getPatientDoctorVisitId,
  });
};
