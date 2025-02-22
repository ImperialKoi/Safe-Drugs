import React, { useState } from 'react';
import { ClipboardList, Truck, Send, CheckCircle } from 'lucide-react';

export default function DashboardPage() {
  const [procedure, setProcedure] = useState('');
  const [supplier, setSupplier] = useState('');
  const [suppliers, setSuppliers] = useState<string[]>([]);

  const handleAddSupplier = () => {
    if (supplier.trim()) {
      setSuppliers([...suppliers, supplier.trim()]);
      setSupplier('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submission logic here
    console.log({ procedure, suppliers });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <ClipboardList className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Submit Procedure</h1>
            <p className="mt-2 text-gray-600">
              Document your pharmaceutical process and suppliers for verification
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="procedure" className="block text-sm font-medium text-gray-700 mb-2">
                Procedure Description
              </label>
              <textarea
                id="procedure"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-3"
                placeholder="Describe your pharmaceutical procedure in detail..."
                value={procedure}
                onChange={(e) => setProcedure(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="suppliers" className="block text-sm font-medium text-gray-700 mb-2">
                Suppliers
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  className="flex-1 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  placeholder="Add a supplier..."
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleAddSupplier}
                  className="px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition flex items-center"
                >
                  <Truck className="w-4 h-4 mr-2" />
                  Add
                </button>
              </div>

              <div className="space-y-2">
                {suppliers.map((s, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Procedure
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}