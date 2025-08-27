import { useState } from "react";
import { useNavigate } from "react-router-dom";
import frontImg from "../assets/bg-card-front.png";
import backImg from "../assets/bg-card-back.png";
import bgDesktop from "../assets/bg-main-desktop.png";
import bgMobile from "../assets/bg-main-mobile.png";

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
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div
        className="relative lg:w-1/2 w-full min-h-[250px] lg:min-h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgDesktop})` }}
      >
        {/* Mobile background */}
        <div
          className="absolute inset-0 lg:hidden bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgMobile})` }}
        ></div>

        {/* Front Card */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 lg:top-1/4 lg:left-40 lg:translate-x-0 w-[280px] h-[150px] sm:w-[320px] sm:h-[180px] text-white">
          <img src={frontImg} alt="card front" className="w-full h-full rounded-lg shadow-lg" />
          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <div className="flex justify-between">
              <div className="w-8 h-8 rounded-full bg-white"></div>
              <div className="w-6 h-6 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <p className="tracking-widest text-lg sm:text-xl">
                {formData.number || "0000 0000 0000 0000"}
              </p>
              <div className="flex justify-between mt-2 text-xs sm:text-sm">
                <p className="uppercase">{formData.name || "JANE APPLESEED"}</p>
                <p>
                  {(formData.month || "00")}/{formData.year || "00"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 lg:top-[55%] lg:left-60 lg:translate-x-0 w-[280px] h-[150px] sm:w-[320px] sm:h-[180px]">
          <img src={backImg} alt="card back" className="w-full h-full rounded-lg shadow-lg" />
          <div className="absolute top-[60px] right-8 text-white font-semibold tracking-widest text-sm sm:text-base">
            {formData.cvc || "000"}
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center bg-white py-12 px-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-sm w-full space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CARDHOLDER NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Jane Appleseed"
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CARD NUMBER
            </label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="e.g. 1234 5678 9123 0000"
              maxLength="19"
              className="w-full border rounded-md px-3 py-2 mt-1"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                EXP. DATE (MM/YY)
              </label>
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
              <label className="block text-sm font-medium text-gray-700">
                CVC
              </label>
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
            className="w-full bg-purple-900 text-white py-3 rounded-md mt-4 hover:bg-purple-800 transition"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
