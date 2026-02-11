import React, { useState } from "react";
import { GetAllData } from "../feature/globalState/state";
import { useDispatch, useSelector } from "react-redux";

const api = process.env.REACT_APP_API_URL + "/certificate"

const ManageCertifications = () => {

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    organization: "",
    icon_class: "",
    src: "",
  });
  const [editId, setEditId] = useState(null)




  const globalState = useSelector(state => state.state)

  const certifications = globalState?.data?.Certificate || []

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update certification
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError("")
    try {
      if (!form.title || !form.organization) {
        alert("Title and Organization are required!");
        return;
      }

      const payload = {
        method: editId ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form)
      }

      const req = await fetch(editId ? api + `/${editId}` : api, payload)
      setLoading(false)
      if (!req.ok) {
        const res = await req.json()
        setError(res.error || "Cant Save!")
      }
      if (req.ok) {
        dispatch(GetAllData())
        setForm({
          title: "",
          organization: "",
          icon_class: "",
          src: ""
        })
      }

    } catch (err) {
      alert(err.message)
    }
  };

  // Delete certification
  const handleDelete = async (id) => {
    setError("")
    try{
      let res = await fetch(api+`/${id}`,{method:"delete"})
      if(!res.ok) throw Error("Delete Faild.")
      if(res.ok){
        dispatch(GetAllData())
      }
    }catch(err){setError(err.message)}
  };

  // Edit certification
  const handleEdit = (cert) => {
    const tdata = {}
    for (const key of Object.keys(form)) {
      tdata[key] = cert[key]
    }
    setForm(tdata);
    setEditId(cert._id);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Certifications</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-6 mb-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Certification Title"
          value={form.title}
          onChange={handleChange}
          className="border text-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="organization"
          placeholder="Organization"
          value={form.organization}
          onChange={handleChange}
          className="border text-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="icon_class"
          placeholder="Font Awesome Icon Class"
          value={form.icon_class}
          onChange={handleChange}
          className="border text-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="src"
          placeholder="Certification File URL"
          value={form.src}
          onChange={handleChange}
          className="border text-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {editId !== null ? "Update Certification" : "Add Certification"}
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-gray-500">Loading certifications...</p>}

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Empty state */}
      {!loading && certifications.length === 0 && !error && (
        <p className="text-gray-500">No certifications found. Add one above!</p>
      )}

      {/* Certifications List */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-4 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <i className={`${cert.icon_class} text-3xl text-blue-500`}></i>
              <div>
                <h2 className="text-gray-600 font-bold text-lg">{cert.title}</h2>
                <p className="text-gray-600">{cert.organization}</p>
              </div>
            </div>
            <a
              href={cert.src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-4"
            >
              View Certificate
            </a>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(cert)}
                className="flex-1 bg-yellow-400 text-white py-1 rounded hover:bg-yellow-500 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(cert._id)}
                className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCertifications;
