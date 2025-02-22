import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Building2, Briefcase, FileText, AlertTriangle, User, MapPin, Phone, Mail, Lock } from 'lucide-react';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    companyName: '',
    businessType: 'manufacturer', // or distributor, pharmacy
    address: '',
    city: '',
    state: '',
    zipCode: '',
    licenseNumber: '',
    productCategories: [] as string[],
    hasCriminalRecord: false,
    criminalRecordDetails: '',
    yearsInBusiness: '',
    references: '',
    declaration: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation and submission logic here
    navigate('/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Pharmaceutical Dealer Registration</h1>
          <p className="mt-2 text-gray-600">Complete this form to register as an authorized pharmaceutical dealer</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Building2 className="w-5 h-5 mr-2" />
              Business Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                >
                  <option value="manufacturer">Manufacturer</option>
                  <option value="distributor">Distributor</option>
                  <option value="pharmacy">Pharmacy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">License Number</label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Years in Business</label>
                <input
                  type="number"
                  name="yearsInBusiness"
                  value={formData.yearsInBusiness}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Business Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Criminal Record */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Background Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="hasCriminalRecord"
                  checked={formData.hasCriminalRecord}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Do you have any criminal record?
                </label>
              </div>
              {formData.hasCriminalRecord && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Please provide details</label>
                  <textarea
                    name="criminalRecordDetails"
                    value={formData.criminalRecordDetails}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                  />
                </div>
              )}
            </div>
          </div>

          {/* References */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Professional References
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                List three professional references (Name, Company, Contact Information)
              </label>
              <textarea
                name="references"
                value={formData.references}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm p-2"
                required
              />
            </div>
          </div>

          {/* Declaration */}
          <div className="space-y-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                required
              />
              <label className="ml-2 block text-sm text-gray-700">
                I declare that all information provided is true and accurate. I understand that false statements may result in denial of registration.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
}