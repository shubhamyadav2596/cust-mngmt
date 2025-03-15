import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, deleteCustomer } from '../store/customerSlice';
import CustomerForm from '../components/CustomerForm';
import { TrashIcon } from '@heroicons/react/24/outline';

function CustomerManagement() {
  const dispatch = useDispatch();
  const { customers, status, error } = useSelector(state => state.customers);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCustomers());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-xl md:text-2xl text-center md:text-start font-bold mb-6">Customer Management</h2>
      <div className="flex flex-col gap-6">
        <div>
          <CustomerForm />
        </div>
        <div>
          <div className="bg-white overflow-x-auto rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 overflow-auto">
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{customer.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(customer.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerManagement;