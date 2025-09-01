import { useState, useEffect } from "react";
import type { Watch } from "../../models/Watch";

function PageByGender(gender: string) {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()async => {
    const fetchWatches = async ()=>{
        try{
            
        }
    }
  })

  return <div></div>;
}
