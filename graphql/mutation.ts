import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      access_token
      userId
    }
  }
`;

export const REQUEST_SUB_MUTATION = gql`
  mutation CreateRequest($createRequestInput: CreateRequestDto!) {
    createRequest(createRequestInput: $createRequestInput) {
      id
      requestType
      status
      createdAt
      updatedAt
    }
  }
`;
