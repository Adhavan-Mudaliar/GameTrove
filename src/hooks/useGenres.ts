import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genres{
    id:number;
    name:string;
}

interface FetchGenresResponse{
    count:number;
    results:Genres[];
}

const useGenres = () => {
    const [genres, setGames] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const[isLoading,setLoading]= useState(false);
  
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", {signal:controller.signal})
        .then((res) => {
          setLoading(false);
          setGames(res.data.results)})
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
          setLoading(false);
        });
        return ()=>controller.abort();
    }, []);

    return {genres, error, isLoading};
}
export default useGenres;
