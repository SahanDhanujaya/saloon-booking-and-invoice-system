"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLoader } from "@/app/provider/LoaderContext";

const NavigationLoaderHandler = () => {
  const pathname = usePathname();
  const { stopLoading } = useLoader();

  useEffect(() => {
    stopLoading();
  }, [pathname, stopLoading]);

  return null;
};

export default NavigationLoaderHandler;