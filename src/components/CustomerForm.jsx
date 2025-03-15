import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../store/customerSlice';

function CustomerForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomer(formData));
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Add New Customer</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="mt-1 block w-full rounded-md border-[1px] border-gray-300 p-2 shadow-sm outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
               placeholder="Email"
            className="mt-1 block w-full rounded-md border-[1px] border-gray-300 p-2 shadow-sm outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
               placeholder="Phone"
            className="mt-1 block w-full rounded-md border-[1px] border-gray-300 p-2 shadow-sm outline-none"
            required
          />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Customer
          </button>
    </form>
  );
}

export default CustomerForm;