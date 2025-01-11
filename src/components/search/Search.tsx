import { useRef, useState } from "react";
import { useNavigate } from "react-router";

interface SearchProps {
  btnSearch?: boolean;
}

export const Search = ({ btnSearch }: SearchProps) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;

    navigate(`items?search=${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="laptops, smartphones, ..."
        autoComplete="off"
        className="p-2 rounded-md text-black focus:border-yellow-500 focus:border"
        value={search}
        onChange={handleChange}
        ref={inputRef}
      />
      {btnSearch && (
        <button
          type="submit"
          disabled={!search}
          className="p-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xl rounded-md disabled:bg-opacity-25 disabled:text-gray-400"
        >
          Buscar
        </button>
      )}
    </form>
  );
};
