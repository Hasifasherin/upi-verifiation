import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/details", { state: formData });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left  cards */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 via-pink-600 to-orange-400 p-6">
        
        {/* Front Card */}
        <div className="w-80 h-44 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white p-6 shadow-lg mb-6">
          <div className="flex justify-between">
            <div className="w-6 h-6 rounded-full bg-white"></div>
            <div className="w-8 h-8 rounded-full border-2 border-white"></div>
          </div>
          <p className="mt-8 text-xl tracking-widest">
            {formData.number || "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between mt-4 text-sm">
            <p>{formData.name || "JANE APPLESEED"}</p>
            <p>{formData.month || "00"}/{formData.year || "00"}</p>
          </div>
        </div>

        {/* Back Card */}
        <div className="w-80 h-44 rounded-xl bg-gray-200 shadow-lg relative">
          <div className="bg-black h-10 mt-6"></div>
          <div className="mt-6 px-4 flex justify-end">
            <div className="bg-gray-400 w-28 h-8 flex items-center justify-center text-sm text-black">
              {formData.cvc || "000"}
            </div>
          </div>
        </div>
      </div>

      {/* Right  form */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-4 px-6">
          <div>
            <label className="block text-sm font-medium">CARDHOLDER NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" Jane "
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">CARD NUMBER</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="e.g. 1234 5678 9123 000"
              maxLength="19"
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">EXP. DATE</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  placeholder="MM"
                  maxLength="2"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                  required
                />
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="YY"
                  maxLength="2"
                  className="w-full border rounded-md px-3 py-2 mt-1"
                  required
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">CVC</label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="e.g. 123"
                maxLength="3"
                className="w-full border rounded-md px-3 py-2 mt-1"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-2 rounded-md mt-4"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
