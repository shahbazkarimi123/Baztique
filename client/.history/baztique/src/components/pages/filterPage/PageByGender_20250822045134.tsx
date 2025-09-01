import { useState, useEffect } from "react";
import type { Watch } from "../../models/Watch";
import { getWatchesByGender } from "../../../services/GetWatchByGender";

function PageByGender(gender: string) {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    const fetchWatches = async () => {
      try {
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
  if(error) return <p></p>
  return <div>
    
  </div>;
}
