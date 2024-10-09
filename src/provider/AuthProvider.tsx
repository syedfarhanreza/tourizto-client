"use client";

import { useGetAuthorQuery } from "@/redux/features/auth/auth.api";
import { setLoading, setUser } from "@/redux/features/auth/auth.slice";
import { useAppSelector } from "@/redux/hook";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { token } = useAppSelector((state) => state.auth);

  const { data, isSuccess, isError, isFetching, isUninitialized } =
    useGetAuthorQuery(token as string, {
      skip: !token,
    });

  useEffect(() => {
    dispatch(setLoading(isFetching));

    if (isSuccess) {
      dispatch(setUser({ user: data?.data }));
      dispatch(setLoading(false));
    }
  }, [isFetching, isSuccess, dispatch, data?.data]);

  return <>{children}</>;
};

export default AuthProvider;
