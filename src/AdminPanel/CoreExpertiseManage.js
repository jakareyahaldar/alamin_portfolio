import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllData } from "../feature/globalState/state";

const API_URL = process.env.REACT_APP_API_URL + "/expertise";

const emptyForm = {
  icon: "",
  iconBg: "",
  title: "",
  description: "",
};

export default function CoreExpertise() {

  const dispatch = useDispatch()

  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const globalState = useSelector(state => state.state)
  
  const data = globalState?.data?.Experties || []



  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError("");
    setMessage("");

    if (!form.title || !form.description) {
      setError("Title and description are required");
      return;
    }

    try {
      const res = await fetch(
        editId ? `${API_URL}/${editId}` : API_URL,
        {
          method: editId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        const dd = await res.json()
        throw new Error(dd.error);
      }

      setMessage(editId ? "Updated successfully" : "Added successfully");
      setForm(emptyForm);
      setEditId(null);
      dispatch(GetAllData())
      setLoading(false)
    } catch (err) {
      setError(err.message);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }
      dispatch(GetAllData())
      
    } catch (err) {
      setError(err.message);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (item) => {
    setEditId(item._id);
    setForm(item);
  };

  /* ================= UI ================= */
  return (
    <div className="max-w-6xl mx-auto p-6 text-black">
      <h2 className="text-black text-3xl font-bold mb-6 text-center">
        Core Expertise Manager
      </h2>

      {/* MESSAGE */}
      {error && <p className="text-red-500 mb-3">{error}</p>}
      {message && <p className="text-green-500 mb-3">{message}</p>}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4 bg-white text-black p-6 rounded-xl shadow mb-10"
      >
        <input
          className="border p-3 rounded"
          placeholder="Font Awesome Icon class (fa-solid fa-code)"
          value={form.icon}
          onChange={(e) => setForm({ ...form, icon: e.target.value })}
        />

        <input
          className="border p-3 rounded"
          placeholder="background Icon class (fa-solid fa-code)"
          value={form.iconBg}
          onChange={(e) => setForm({ ...form, iconBg: e.target.value })}
        />

        <input
          className="border p-3 rounded md:col-span-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          className="border p-3 rounded md:col-span-2"
          placeholder="Description"
          rows="3"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition md:col-span-2"
        >
          {editId ? "Update Expertise" : "Add Expertise"}
        </button>
      </form>

      {/* DATA STATE */}
      {loading && <p className="text-center">Loading...</p>}

      {!loading && data.length === 0 && !error && (
        <p className="text-center text-gray-500">
          No expertise found. Add your first one 🚀
        </p>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-xl text-white`}
            >
              <i className={`${item.icon} text-gray-600 text-xl`} />
              <i className={`${item.iconBg} text-gray-600 text-xl`} />
            </div>

            <h3 className="text-xl text-gray-600 font-semibold mt-4">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {item.description}
            </p>

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => handleEdit(item)}
                className="px-4 py-2 text-sm rounded bg-yellow-400 hover:bg-yellow-500"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item._id)}
                className="px-4 py-2 text-sm rounded bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
