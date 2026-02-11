import React, { useState } from "react";
import { GetAllData } from "../feature/globalState/state";
import { useDispatch, useSelector } from "react-redux";

const api = process.env.REACT_APP_API_URL + "/work"

const WorkDemoManager = () => {

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ img: "", event: "", org: "" });
  const [editId, setEditId] = useState(null)

  const globalState = useSelector(state => state.state)

  const data = globalState?.data?.WorkDemon || []

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.img || !form.event || !form.org) return;
    setLoading(true)
    setError("")
    const payload = {
      method: editId ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form)
    }

    let req = await fetch(editId ? api + `/${editId}` : api, payload)
    setLoading(false)
    const isok = req.ok
    req = await req.json()
    if (!isok) {
      setError(req.error)
      return
    }

    dispatch(GetAllData())
    setEditId(null)
    setForm({ img: "", event: "", org: "" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setError("")
      try {
        let res = await fetch(api + `/${id}`, { method: "delete" })
        if (!res.ok) throw Error("Delete Faild.")
        if (res.ok) {
          dispatch(GetAllData())
        }
      } catch (err) { setError(err.message) }
    }
  };

  const handleEdit = (item) => {
    const d = {}
    for (const key of Object.keys(form)) {
      d[key] = item[key]
    }
    setForm(d);
    setEditId(item._id);
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
          {editId !== null ? "Update" : "Add"}
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
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
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
