import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { UsersIcon, UserIcon, ClockIcon  } from '@heroicons/react/24/outline';
import { fetchCustomers } from "../store/customerSlice";

function CustomerStats() {
  const { customers } = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const recentCustomers = customers.slice(-5);
  const totalCustomers = customers.length;

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h2 className="text-xl md:text-2xl text-center md:text-start font-bold mb-6">Customer Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap gap-2  md:justify-center items-center">

          
            <UsersIcon className="text-blue-600 w-12" />
            <div className="ml-4">
              <p className="text-gray-500">Total Customers</p>
              <h2 className="text-3xl md:text-center font-bold">{totalCustomers}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap gap-2  md:justify-center items-center">
            <UserIcon className="text-green-600 w-12" />
            <div className="ml-4">
              <p className="text-gray-500">New This Month</p>
              <h2 className="text-3xl md:text-center font-bold">{recentCustomers.length}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap gap-2  md:justify-center items-center">
            <ClockIcon  className="text-purple-600 w-12" />
            <div className="ml-4">
              <p className="text-gray-500">Active Now</p>
              <h2 className="text-3xl md:text-center font-bold">
                {Math.floor(totalCustomers * 0.6)}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Customers</h2>
        <div className="space-y-4">
          {recentCustomers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {customer.name.charAt(0)}
                </span>
              </div>
              <div className="ml-4">
                <p className="font-semibold">{customer.name}</p>
                <p className="text-sm text-gray-500">{customer.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerStats;
