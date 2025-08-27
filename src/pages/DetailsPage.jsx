import { useLocation, useNavigate } from "react-router-dom";

export default function DetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-pink-600 to-orange-400 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Card Details</h2>
        <div className="space-y-2">
          <p><span className="font-medium">Cardholder:</span> {state.name}</p>
          <p><span className="font-medium">Card Number:</span> {state.number}</p>
          <p><span className="font-medium">Expiry:</span> {state.month}/{state.year}</p>
          <p><span className="font-medium">CVC:</span> {state.cvc}</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-purple-900 text-white py-2 rounded-md"
        >
          Back
        </button>
      </div>
    </div>
  );
}
