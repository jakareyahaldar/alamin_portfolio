import React, { useState, useEffect } from "react";

// Dummy initial data for testing
const initialData = [
  {
    img: "https://lh3.googleusercontent.com/d/1dYf7Y5DoxLPcxbZXwbJYb6Y2mLGo3OCr",
    event: "Summit",
    org: "ICT Division",
  },
];

const WorkDemoManager = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ img: "", event: "", org: "" });
  const [editIndex, setEditIndex] = useState(null);

  // Fetch data from server (simulate fetch)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        // Replace with your actual API
        // const response = await fetch("YOUR_API_URL");
        // if (!response.ok) throw new Error("Failed to fetch");
        // const result = await response.json();
        const result = initialData; // using dummy data for now
        setData(result);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.img || !form.event || !form.org) return;

    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = form;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, form]);
    }

    setForm({ img: "", event: "", org: "" });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);
    }
  };

  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Work Demonstration Manager
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 mb-6 bg-white p-4 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={form.img}
          onChange={handleChange}
          className="border p-2 rounded-md flex-1 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="event"
          placeholder="Event Name"
          value={form.event}
          onChange={handleChange}
          className="border p-2 rounded-md flex-1 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="org"
          placeholder="Organization"
          value={form.org}
          onChange={handleChange}
          className="border p-2 rounded-md flex-1 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      {/* Loading & Error */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Empty State */}
      {!loading && data.length === 0 && !error && (
        <p className="text-center text-gray-400">No work demonstrations found.</p>
      )}

      {/* Data List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.event}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-semibold">{item.event}</h3>
              <p className="text-gray-500 mb-2">{item.org}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkDemoManager;
