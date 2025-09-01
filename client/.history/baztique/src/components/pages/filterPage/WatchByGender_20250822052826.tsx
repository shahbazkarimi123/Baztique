import { useState, useEffect } from "react";
import type { Watch } from "../../models/Watch";
import { getWatchesByGender } from "../../../services/GetWatchByGender";
import WatchCard from "../home/box/WatchCard";
import { useParams } from "react-router-dom";
function WatchByGender() {
  const { genderParam } = useParams<{ gender: string }>();
  const gender = 
  const [watches, setWatches] = useState<Watch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    const fetchWatches = async () => {
      try {
        if (!gender) return;
        const data = await getWatchesByGender(gender);
        setWatches(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWatches(); // ✅ you forgot this
  }, [gender]);

  if(loading) return <p className="text-center">Loading Watches ....</p>
  if(error) return <p className="text-center text-red-500">{error}</p>
  return <div>
    {watches.map((watch)=>(
      <WatchCard key={watch.id} watch={watch}/>
    ))}
    
  </div>;
}
export default WatchByGender;