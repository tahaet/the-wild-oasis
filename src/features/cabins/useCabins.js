import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

function useCabins() {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { isLoading, cabins, error };
}

export default useCabins;
