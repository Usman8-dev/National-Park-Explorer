import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "fIAoJU8SH2ALjsrggTgCfTVXmenfEjIlo8sNHLbq";

function Detail_page() {
  const { id } = useParams(); // this is the parkCode, e.g. "abli"
  const [park, setPark] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPark = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://developer.nps.gov/api/v1/parks?id=${id}`,
          {
            headers: { "X-Api-Key": API_KEY },
          }
        );
        const data = await res.json();
        setPark(data.data?.[0] || null);
      } catch (error) {
        console.error("Fetch Error:", error);
        setPark(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPark();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-blue-50">
        <p className="text-gray-500 text-lg">Loading park details...</p>
      </div>
    );
  }

  if (!park) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-blue-50 gap-4">
        <p className="text-gray-500 text-lg">Park not found.</p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2.5 font-medium transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50 py-10">
      <div className="max-w-4xl mx-auto p-4">
        <Link
          to="/"
          className="inline-block mb-6 text-gray-700 hover:text-gray-900 font-medium transition-colors"
        >
          ← Back to Parks
        </Link>

        <div className="rounded-2xl border border-gray-100 shadow-md overflow-hidden bg-white">
          <img
            src={park.images?.[0]?.url}
            alt={park.fullName}
            className="w-full h-80 object-cover"
          />

          <div className="p-6">
            <h1 className="font-bold text-3xl text-gray-800 mb-2">
              {park.fullName}
            </h1>

            <p className="text-gray-500 mb-6">
              {park.states} &middot; {park.designation}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {park.description}
            </p>

            {park.entranceFees?.[0] && (
              <div className="mb-6">
                <h2 className="font-bold text-lg text-gray-800 mb-1">
                  Entrance Fee
                </h2>
                <p className="text-gray-700">
                  ${park.entranceFees[0].cost} — {park.entranceFees[0].description}
                </p>
              </div>
            )}

            {park.operatingHours?.[0] && (
              <div className="mb-6">
                <h2 className="font-bold text-lg text-gray-800 mb-1">
                  Hours
                </h2>
                <p className="text-gray-700">
                  {park.operatingHours[0].description}
                </p>
              </div>
            )}

            {park.addresses?.[0] && (
              <div className="mb-6">
                <h2 className="font-bold text-lg text-gray-800 mb-1">
                  Address
                </h2>
                <p className="text-gray-700">
                  {park.addresses[0].line1}, {park.addresses[0].city},{" "}
                  {park.addresses[0].stateCode} {park.addresses[0].postalCode}
                </p>
              </div>
            )}

            
             <a href={park.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white rounded-full px-6 py-2.5 font-medium transition-colors"
            >
              Visit Official NPS Page ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail_page;