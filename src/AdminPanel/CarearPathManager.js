import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllData } from "../feature/globalState/state";

const API_URL = process.env.REACT_APP_API_URL + "/carear"
export default function CareerPathManager() {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const { isLodding, data } = useSelector(state => state.state)
    if(isLodding !== loading){
        if(isLodding) setLoading(true)
        if(!isLodding) setLoading(false)
    }
    const careers = data?.carearPath || []

    const [form, setForm] = useState({
        _id: null,
        role: "",
        date: "",
        organization: "",
        points: "",
    });


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const payload = {
            role: form.role,
            date: form.date,
            organization: form.organization,
            points: form.points.split("\n"),
        };

        
        try {
            if (form._id) {
                const res = await fetch(`${API_URL}/${form._id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                if (!res.ok) throw new Error("Update failed");
                if (res.ok){
                    dispatch(GetAllData())
                }
            } else {
                const res = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                if (!res.ok) throw new Error("Create failed");
                if (res.ok){
                    dispatch(GetAllData())
                }
            }

            setForm({ id: null, role: "", date: "", organization: "", points: "" });
        } catch {
            setError("Server is unreachable. Your changes were not saved.");
        }
    };

    const handleEdit = (item) => {
        setForm({
            _id: item._id,
            role: item.role,
            date: item.date,
            organization: item.organization,
            points: item.points.join("\n"),
        });
    };

    const handleDelete = async (id) => {
        
        try {
            const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            if(!res.ok) throw Error("Cant Delete!")
            if(res.ok) dispatch(GetAllData())
        } catch {
            setError("Failed to delete item from server.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-wide">Career Path Manager</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 mb-10 space-y-5 border border-gray-200">
                <input
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Role"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                />
                <input
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    placeholder="Date Range"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                />
                <input
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Organization"
                    className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                />
                <textarea
                    name="points"
                    value={form.points}
                    onChange={handleChange}
                    placeholder="Points (one per line)"
                    className="w-full border border-gray-300 rounded-lg p-4 h-32 focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none text-gray-900 placeholder-gray-500"
                    required
                />

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                    {form._id ? "Update" : "Add"} Career
                </button>

                {error && <p className="text-red-600 font-medium mt-2">{error}</p>}
            </form>

            {/* List */}
            <div className="w-full max-w-3xl space-y-6">
                {loading && <p className="text-center text-gray-600">Loading career data...</p>}
                {!loading && (careers.length === 0) && (
                    <p className="text-center text-gray-600 italic">No career data available. Please add your career path.</p>
                )}
                {!loading && careers.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">{item.role}</h3>
                                <p className="text-gray-700 mt-1">{item.organization}</p>
                                <p className="text-gray-600 mt-1">{item.date}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleEdit(item)} className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition text-gray-800">Edit</button>
                                <button onClick={() => handleDelete(item._id)} className="px-4 py-2 border rounded-lg text-red-600 hover:bg-red-50 transition">Delete</button>
                            </div>
                        </div>
                        <ul className="list-disc pl-5 mt-4 text-gray-800 space-y-1">
                            {item.points.map((p, i) => <li className="text-gray-800" key={i}>{p}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}