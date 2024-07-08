import { useQuery } from "@tanstack/react-query";

const fetchBooks = async () => {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
  return res.json();
};

const useBooks = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  return { isLoading, error, data };
};

export default useBooks;
