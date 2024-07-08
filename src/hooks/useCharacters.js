import { useQuery } from "@tanstack/react-query";

const fetchCharacters = async () => {
  const res = await fetch(
    "https://potterapi-fedeperin.vercel.app/en/characters"
  );
  return res.json();
};

const useCharacters = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["Characters"],
    queryFn: fetchCharacters,
  });

  return { isLoading, error, data };
};

export default useCharacters;
