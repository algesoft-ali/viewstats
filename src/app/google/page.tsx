"use client";

import { useGetUserQuery } from "@/lib/features/user/userApi";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GoogleCallbackPage = ({
  searchParams: { accessToken },
}: {
  searchParams: { accessToken?: string };
}) => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const router = useRouter();

  const { isLoading, isSuccess } = useGetUserQuery(
    {},
    {
      skip: getCookie("accessToken") ? false : true,
    }
  );

  useEffect(() => {
    if (accessToken) {
      setCookie("accessToken", accessToken, {
        expires: new Date(Date.now() + 86400 * 1000),
      });
      setPageLoading(false);
    }
    if (isSuccess) {
      router.push("/");
    }
  }, [accessToken, isSuccess, router]);

  return (
    <div className="h-[calc(100vh-90px)] grid place-items-center">
      <p className="text-center text-2xl font-semibold">
        {isLoading || pageLoading ? "Loading..." : "Success!"}
      </p>
    </div>
  );
};

export default GoogleCallbackPage;
