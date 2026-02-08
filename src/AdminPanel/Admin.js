import { Link } from "react-router-dom";
import me from "../assets/me2.png";
import { useState } from "react";

export default function Admin() {
    const api = process.env.REACT_APP_API_URL;
    const [prevImage, setPrevImage] = useState(me);
    const [image_url, setImageUrl] = useState("");

    // IMAGE FUNCTIONALITY
    async function SaveImage() {
        try {
            if (!image_url) throw Error("Please enter image URL.");

            const option = {
                method: "POST",
                body: JSON.stringify({ url: image_url }),
                headers: { "content-type": "application/json" },
            };

            const request = await fetch(api + "/image", option);
            if (request.ok) {
                const res = await request.json();
                setPrevImage(res.url);
            } else {
                throw Error("Can't save!");
            }
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
            {/* HEADER */}
            <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
                Admin Dashboard
            </h2>

            {/* IMAGE SECTION */}
            <div className="flex flex-col md:flex-row items-center md:justify-between bg-white shadow-lg rounded-xl p-8 gap-6 mb-10">
                <img
                    className="h-40 w-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
                    src={prevImage}
                    alt="Profile"
                />
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <input
                        value={image_url}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="px-4 py-2 text-black border border-gray-300 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="url"
                        placeholder="Enter Image URL..."
                    />
                    <button
                        onClick={SaveImage}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
                    >
                        Save
                    </button>
                </div>
            </div>

            {/* NAVIGATION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link
                    className="bg-gradient-to-r from-blue-400 to-blue-600 py-4 rounded-xl shadow-lg text-center font-bold text-white hover:scale-105 transform transition 
               drop-shadow-md"
                    to={"/manage-certifications"}
                >
                    Certificates
                </Link>
                <Link
                    className="bg-gradient-to-r from-purple-400 to-purple-600 py-4 rounded-xl shadow-lg text-center font-bold text-white hover:scale-105 transform transition
               drop-shadow-md"
                    to={"/manage-carearpath"}
                >
                    Career Paths
                </Link>
                <Link
                    className="bg-gradient-to-r from-green-400 to-green-600 py-4 rounded-xl shadow-lg text-center font-bold text-white hover:scale-105 transform transition
               drop-shadow-md"
                    to={"/manage-exparties"}
                >
                    Expertise
                </Link>
                <Link
                    className="bg-gradient-to-r from-pink-400 to-pink-600 py-4 rounded-xl shadow-lg text-center font-bold text-white hover:scale-105 transform transition
               drop-shadow-md"
                    to={"/manage-workdemon"}
                >
                    Work Demonstrations
                </Link>
            </div>

        </div>
    );
}
