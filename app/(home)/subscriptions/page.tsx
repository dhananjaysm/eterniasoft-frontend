'use client'
import { useAuth } from "@/app/context/AuthContext";
import Breadcrumb from "@/components/home/Breadcrumb";
import Feedback from "@/components/home/dashboard/Feedback";
import SubscriptionTable from "@/components/home/subscriptions/SubscriptionTable";
import { GET_USER_SUB_DATA } from "@/graphql/query";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";


export default function Subscription() {
  const {userId} = useAuth();
  const { loading, error, data } = useQuery(GET_USER_SUB_DATA, {
    variables: { userId }, 
    skip: !userId,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Breadcrumb pageName="Subscriptions" />

      <div className="flex flex-col gap-10">
        <SubscriptionTable subscriptionsData={data.userSubscriptions} />
      </div>
    </>
  );
}
