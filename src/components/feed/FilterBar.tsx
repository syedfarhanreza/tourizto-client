"use client";

import useDebounce from "@/hooks/debounce";
import { setPost } from "@/redux/features/post/post.slice";
import { useAppDispatch } from "@/redux/hook";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import CategoryFilterBox from "./CategoryFilterBox";
import SortPost from "./SortPost";

const FilterBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 1000);
  const searchParams = useSearchParams();
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("searchTerm", debounceValue);
    params.set("page", "1");
    dispatch(setPost({ post: [], new: true }));
    router.push(`?${params.toString()}`);
  }, [debounceValue, router]);

  return (
    <div className="shrink-0 w-[300px] pr-[10px] flex flex-col gap-[25px]">
      <div className="">
        <h3 className="mb-2 text-lg font-medium">Search</h3>
        <Input
          type="text"
          placeholder="Search products..."
          defaultValue={searchParams.get("searchTerm") || ""}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <CategoryFilterBox />
      <SortPost />
    </div>
  );
};

export default FilterBar;
