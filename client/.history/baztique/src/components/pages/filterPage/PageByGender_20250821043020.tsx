import { useState, useEffect } from "react";
import type { Watch } from "../../models/Watch";
import { getWatchesByGender } from "../../../services/GetWatchByGender";

function PageByGender(gender: string) {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=> {
    const fetchWatches = async ()=>{
        try{
            const data = await getWatchesByGender()
        }
    }
  })

  return <div></div>;
}
