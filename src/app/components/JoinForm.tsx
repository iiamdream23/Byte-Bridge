"use client";
import React, { useState } from "react";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission logic (e.g., send a request to your server)
    console.log("Form submitted:", formData);
    // You can add logic here to send the form data to your server or perform other actions.

    // Optionally, you can reset the form after submission
    setFormData({
      name: "",
      email: "",
      additionalInfo: "",
    });
  };

  return (
    <form className="max-w-sm mt-28 mb-20 lg:mt-32 mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Join Our Community 🤗</h2>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
      <label
        htmlFor="email"
        className="block mt-4 text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
      <label
        htmlFor="additionalInfo"
        className="block mt-4 text-sm font-medium text-gray-700"
      >
        Additional Information
      </label>
      <textarea
        id="additionalInfo"
        name="additionalInfo"
        value={formData.additionalInfo}
        onChange={handleChange}
        rows={3}
        className="mt-1 p-2 w-full border rounded-md"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Send Request
      </button>
    </form>
  );
};

export default JoinForm;
