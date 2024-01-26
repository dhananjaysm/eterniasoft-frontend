import { gql } from "@apollo/client";

export const GET_USER_SUB_DATA = gql`
  query UserSubscriptions($userId: String!) {
    userSubscriptions(userId: $userId) {
      id
      subscriptionType
      status
      plan {
        id
        name
        price
      }
      startDate
      endDate
      renewalPeriod
    }
  }
`;
export const GET_USER_SUB_REQUESTS_QUERY = gql`
  query GetRequestsByUser($userId: String!) {
    getRequestsByUser(userId: $userId) {
      id
      requestType
      plan {
        id
        name
      }
      subscription {
        id
        startDate
        status
        endDate
      }
      approvals {
        id
        approved
        approver {
          id
          username
        }
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const GET_USER_PROFILE_QUERY = gql`
  query FindUserById($userId: String!) {
    findUserById(userId: $userId) {
      id
      username
      email
      firstName
      lastName
      department
      roles
    }
  }
`;

export const GET_PLAN_QUERY = gql`
  query FindPlan($planId: String!) {
    findPlan(planId: $planId) {
      id
      name
      description
      price
      duration
      status
      billingCycle
      autoRenew
      trialPeriodDays
      products {
        id
        name
        price
        description
        maxUsers
        productFeatures {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_PLANS_QUERY = gql`
  query FindPlans {
    findPlans {
      id
      name
      description
      price
      duration
      status
      billingCycle
      autoRenew
      trialPeriodDays
      createdAt
      updatedAt
    }
  }
`;
