import { useQuery } from "@tanstack/react-query";

const fetchSpells = async () => {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/spells");
  return res.json();
};

const useSpells = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["spells"],
    queryFn: fetchSpells,
  });

  return { isLoading, error, data };
};

export default useSpells;
