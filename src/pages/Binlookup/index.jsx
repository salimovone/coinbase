import { useState } from "react";
import axios from "axios";
import { FaSearch, FaSpinner } from "react-icons/fa";

function Binlookup() {
  const [bin, setBin] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!bin || bin.length < 6) {
      setError("BIN raqam kamida 6 xonali bo'lishi kerak.");
      setData(null);
      return;
    }

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await axios.get(`https://lookup.binlist.net/${bin}`);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      setError("Ma'lumot topilmadi yoki xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">💳 Binlookup</h1>

        <div>
          <label className="block text-sm font-medium text-gray-700">Karta BIN raqami:</label>
          <div className="relative">
            <input
              type="text"
              maxLength={8}
              value={bin}
              onChange={(e) => setBin(e.target.value)}
              onKeyDown={handleKeyDown}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border pr-10"
              placeholder="Masalan: 860012"
            />
            <button
              onClick={handleSearch}
              className="absolute inset-y-0 right-2 flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center">
            <FaSpinner className="animate-spin text-blue-500 text-2xl" />
          </div>
        )}

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {data && (
          <div className="bg-gray-50 p-4 rounded-lg space-y-2 border">
            <p><strong>💳 Brend:</strong> {data.scheme?.toUpperCase()}</p>
            <p><strong>🏦 Bank:</strong> {data.bank?.name || "Noma'lum"}</p>
            <p><strong>🌍 Country:</strong> {data.country?.name} {data.country?.emoji}</p>
            <p><strong>🏁 Type:</strong> {data.type}</p>
            <p><strong>🔐 Prepaid:</strong> {data.prepaid ? "Ha" : "Yo‘q"}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Binlookup;
