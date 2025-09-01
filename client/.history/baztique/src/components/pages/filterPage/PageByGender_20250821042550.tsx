import { useState, useEffect } from "react"

function PageByGender(gender:string){
    const [watches, setWatches]=useState<Watch[]>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
    return (
        <div>

        </div>
    )
}