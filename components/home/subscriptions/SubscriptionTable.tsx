import React from "react";
import { BsEyeFill, BsReceipt } from "react-icons/bs";
import { IoReloadOutline } from "react-icons/io5";

const SubscriptionTable = ({ subscriptionsData }) => {
  return (
    <div className="shadow-default dark:bg-boxdark rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 dark:border-strokedark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left bg-gray-2 dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Package
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Invoice date
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {subscriptionsData.map((subscription) => (
              <tr key={subscription.id}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {subscription.package.name}
                  </h5>
                  {/* <p className="text-sm">${subscription.package.price}</p> */}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {subscription.startDate}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="inline-flex px-3 py-1 text-sm font-medium rounded-full bg-success text-success bg-opacity-10">
                    {subscription.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      className="hover:text-primary"
                      title="View Subscription"
                    >
                      <BsEyeFill />
                    </button>
                    <button
                      className="hover:text-primary"
                      title="Renew Subscription"
                    >
                      <IoReloadOutline />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionTable;
