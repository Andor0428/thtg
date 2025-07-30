'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';

const jobCategories = {
  'Front of House': [
    'Waiter/Waitress',
    'Host/Hostess',
    'Bartender',
    'Sommelier',
    'Restaurant Manager',
    'Maître d&apos;',
  ],
  'Back of House': [
    'Chef de Partie',
    'Sous Chef',
    'Head Chef',
    'Kitchen Porter',
    'Pastry Chef',
    'Kitchen Manager',
  ],
  'Management': [
    'General Manager',
    'Operations Manager',
    'Food & Beverage Manager',
    'Events Manager',
    'Hotel Manager',
    'Revenue Manager',
  ],
};

const referralSources = [
  'LinkedIn',
  'Indeed',
  'Company Website',
  'Referral',
  'Job Fair',
  'Social Media',
  'Other',
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  postcode: string;
  selectedCategories: string[];
  selectedRoles: string[];
  salaryExpectation: string;
  cv: File | null;
  coverLetter: File | null;
  referralSource: string;
}

export default function ApplicationForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    postcode: '',
    selectedCategories: [],
    selectedRoles: [],
    salaryExpectation: '',
    cv: null,
    coverLetter: null,
    referralSource: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedCategories: checked 
        ? [...prev.selectedCategories, category]
        : prev.selectedCategories.filter(c => c !== category),
      selectedRoles: checked 
        ? prev.selectedRoles
        : prev.selectedRoles.filter(role => 
            !jobCategories[category as keyof typeof jobCategories].includes(role)
          )
    }));
  };

  const handleRoleChange = (role: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedRoles: checked
        ? [...prev.selectedRoles, role]
        : prev.selectedRoles.filter(r => r !== role)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // For now, we'll just show an alert and close the form
    alert('Application submitted successfully!');
    onClose();
  };

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        postcode: '',
        selectedCategories: [],
        selectedRoles: [],
        salaryExpectation: '',
        cv: null,
        coverLetter: null,
        referralSource: '',
      });
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-start md:items-center justify-center p-2 md:p-4">
        <Dialog.Panel className="bg-white rounded-lg p-4 md:p-8 w-full max-w-2xl my-4 md:my-0 max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <Dialog.Title className="text-xl md:text-2xl font-bold text-[#2ab0b4]">
              Application Form
            </Dialog.Title>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-2"
              aria-label="Close"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Personal Information */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-700">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2ab0b4] focus:ring-[#2ab0b4] text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2ab0b4] focus:ring-[#2ab0b4] text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2ab0b4] focus:ring-[#2ab0b4] text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2ab0b4] focus:ring-[#2ab0b4] text-base"
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-700">Address</h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Street Address *</label>
                  <input
                    type="text"
                    name="streetAddress"
                    required
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2ab0b4] focus:ring-[#2ab0b4] text-base"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2ab0b4] focus:ring-[#2ab0b4] text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Postcode *</label>
                    <input
                      type="text"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2ab0b4] focus:ring-[#2ab0b4] text-base"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Job Preferences */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-700">Job Preferences</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                <div className="space-y-2 pl-1">
                  {Object.keys(jobCategories).map((category) => (
                    <div key={category} className="flex items-center min-h-[2rem]">
                      <input
                        type="checkbox"
                        id={category}
                        checked={formData.selectedCategories.includes(category)}
                        onChange={(e) => handleCategoryChange(category, e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-[#2ab0b4] focus:ring-[#2ab0b4]"
                      />
                      <label htmlFor={category} className="ml-2 text-sm text-gray-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {formData.selectedCategories.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Roles *</label>
                  <div className="space-y-3 pl-1">
                    {formData.selectedCategories.map((category) => (
                      <div key={category} className="space-y-2">
                        <p className="text-sm font-medium text-gray-500">{category}</p>
                        <div className="space-y-2 pl-2">
                          {jobCategories[category as keyof typeof jobCategories].map((role) => (
                            <div key={role} className="flex items-center min-h-[2rem]">
                              <input
                                type="checkbox"
                                id={role}
                                checked={formData.selectedRoles.includes(role)}
                                onChange={(e) => handleRoleChange(role, e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-[#2ab0b4] focus:ring-[#2ab0b4]"
                              />
                              <label htmlFor={role} className="ml-2 text-sm text-gray-700">
                                {role}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Salary Expectation (£ per annum) *</label>
                <input
                  type="text"
                  name="salaryExpectation"
                  required
                  value={formData.salaryExpectation}
                  onChange={handleInputChange}
                  placeholder="e.g. £30,000"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2ab0b4] focus:ring-[#2ab0b4] text-base"
                />
              </div>
            </div>

            {/* Documents */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-700">Documents</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CV (PDF) *</label>
                  <input
                    type="file"
                    name="cv"
                    required
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-[#2ab0b4] file:text-white
                      hover:file:bg-[#2ab0b4]/90"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (PDF)</label>
                  <input
                    type="file"
                    name="coverLetter"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-[#2ab0b4] file:text-white
                      hover:file:bg-[#2ab0b4]/90"
                  />
                </div>
              </div>
            </div>

            {/* Referral Source */}
            <div>
              <label className="block text-sm font-medium text-gray-700">How did you hear about us? *</label>
              <select
                name="referralSource"
                required
                value={formData.referralSource}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2ab0b4] focus:ring-[#2ab0b4] text-base"
              >
                <option value="">Please select</option>
                {referralSources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3 md:gap-4 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full md:w-auto px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full md:w-auto px-4 py-2.5 text-sm font-medium text-white bg-[#2ab0b4] rounded-md hover:bg-[#2ab0b4]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ab0b4]"
              >
                Submit Application
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}  