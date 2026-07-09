import { useEffect, useRef, useState } from "react";
import Park_List from "../Components/Park_List";

const API_KEY = "fIAoJU8SH2ALjsrggTgCfTVXmenfEjIlo8sNHLbq";

function Home() {
  const [allParks, setAllParks] = useState([]); // full list, fetched once
  const [parks, setParks] = useState([]); // filtered/displayed list
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  // Fetch the entire parks list once on mount
  const fetchAllParks = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://developer.nps.gov/api/v1/parks?limit=500`,
        {
          method: "GET",
          headers: { "X-Api-Key": API_KEY },
        }
      );
      const data = await res.json();
      setAllParks(data.data || []);
      console.log(setAllParks);
      setParks(data.data || []); // show all initially, or filter below
    } catch (error) {
      console.error("Fetch Error:", error);
      setAllParks([]);
      setParks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllParks();
  }, []);

  const searchParks = (searchTerm) => {
    const words = searchTerm.toLowerCase().split(" ").filter(Boolean);
    const filtered = allParks.filter((park) => {
      const name = park.fullName.toLowerCase();
      return words.every((word) => name.includes(word));
    });
    setParks(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) searchParks(query);
    else setParks(allParks); // empty search = show all
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50 py-10">
      <div className="max-w-6xl mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 justify-center mb-10"
        >
          <input
            type="text"
            ref={inputRef}
            placeholder="Search Park"
            className="border-2 rounded-full px-5 py-3 w-80 bg-white focus:outline-none focus:border-blue-400 transition-colors"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-medium transition-colors cursor-pointer"
          >
            Search 🔎
          </button>
        </form>

        {loading ? (
          <p className="text-center text-gray-500">Loading parks...</p>
        ) : (
          <Park_List parks={parks} />
        )}
      </div>
    </div>
  );
}

export default Home;



// Old code 

// import { useEffect, useRef, useState } from "react";
// import Park_List from "../Components/Park_List";

// const API_KEY = "fIAoJU8SH2ALjsrggTgCfTVXmenfEjIlo8sNHLbq";

// function Home() {
//   const [parks, setParks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const inputRef = useRef();

//   const fetchParks = async (searchTerm) => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `https://developer.nps.gov/api/v1/parks?q=${encodeURIComponent(
//           searchTerm,
//         )}&limit=50`,
//         {
//           method: "GET",
//           headers: {
//             "X-Api-Key": API_KEY,
//           },
//         },
//       );
//       const data = await res.json();
//       //   console.log("Raw API Data:", data.data);

//       const filtered = (data.data || []).filter((park) =>
//         park.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
//       );

//       console.log("Filtered Data:", filtered); // check this in your console
//       setParks(filtered);
//     } catch (error) {
//       console.error("Fetch Error:", error);
//       setParks([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchParks("Lincoln");
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const query = inputRef.current.value.trim();
//     if(query) fetchParks(query)
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-blue-50 py-10">
//       <div className="max-w-6xl mx-auto p-4">
//         <form
//           onSubmit={handleSubmit}
//           className="flex gap-2 justify-center mb-10"
//         >
//           <input
//             type="text"
//             ref={inputRef}
//             placeholder="Search Park"
//             className="border-2 rounded-full px-5 py-3 w-80 bg-white focus:outline-none focus:border-blue-400 transition-colors"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-medium transition-colors cursor-pointer"
//           >
//             Search 🔎
//           </button>
//         </form>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading parks...</p>
//         ) : (
//           <Park_List parks={parks} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
