import useDebounce from "@/hooks/debounce";
import {
  useGetAllCategoriesQuery,
  useGetCategoriesByNameQuery,
} from "@/redux/features/category/category.api";
import { setPost } from "@/redux/features/post/post.slice";
import { useAppDispatch } from "@/redux/hook";
import { SquareCheck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

const CategoryFilterBox = () => {
  const { data } = useGetAllCategoriesQuery({ limit: 6 });

  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState("N/A");
  const debounceValue = useDebounce(searchValue, 500);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  const suggestionRef = useRef<HTMLUListElement | null>(null);

  const { data: suggestion } = useGetCategoriesByNameQuery(debounceValue, {
    skip: !isFocused,
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const categoriesFromQuery = searchParams.get("category");
    if (categoriesFromQuery) {
      setSelectedCategories(categoriesFromQuery.split(","));
    }
  }, [searchParams]);

  const handleCategoryChange = (id: string) => {
    let updatedCategories;
    dispatch(setPost({ post: [], new: true }));
    if (selectedCategories.includes(id)) {
      updatedCategories = selectedCategories.filter(
        (category) => category !== id
      );
    } else {
      updatedCategories = [...selectedCategories, id];
    }

    setSelectedCategories(updatedCategories);

    const params = new URLSearchParams(searchParams);
    if (updatedCategories.length > 0) {
      params.set("category", updatedCategories.join(","));
    } else {
      params.delete("category");
    }

    params.set("page", "1");

    router.push(`?${params.toString()}`);
  };

  const handleSelectCategory = (id: string) => {
    if (selectedCategories.includes(id)) {
      return ref.current?.blur();
    }

    handleCategoryChange(id);
    setIsFocused(false); 
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(e.target as Node) &&
      suggestionRef.current &&
      !suggestionRef.current.contains(e.target as Node)
    ) {
      setIsFocused(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full md:w-auto my-2 px-4 sm:px-6 md:px-0">
      <h3 className="mb-2 text-lg font-medium">Categories</h3>
      <div className="relative mb-4">
        <input
          className="border border-gray-300 bg-gray-950 rounded-lg w-full h-10 px-3 outline-none focus:ring-2 focus:ring-primary sm:text-sm"
          placeholder="Search category"
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {suggestion?.data && suggestion?.data.length > 0 && isFocused && (
          <Card className="absolute left-0 top-11 z-10 w-full my-1 rounded-lg shadow-lg overflow-auto max-h-60 sm:max-h-40">
            <ul className="py-2" ref={suggestionRef}>
              {suggestion.data.map(({ label, _id }) => (
                <li
                  key={_id}
                  onClick={() => handleSelectCategory(_id)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3 text-sm sm:text-xs"
                >
                  <SquareCheck width={13} className="text-primary" /> {label}
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
      <div className="flex flex-col space-y-2 md:space-y-3">
        {data?.data.map(({ label, _id }) => (
          <div
            onClick={() => handleCategoryChange(_id)}
            className="flex items-center select-none cursor-pointer text-sm sm:text-xs md:text-sm"
            key={_id + "category"}
          >
            <Checkbox value={_id} checked={selectedCategories.includes(_id)} />
            <span className="ml-2">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilterBox;
