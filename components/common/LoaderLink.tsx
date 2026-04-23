"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLoader } from "@/app/provider/LoaderContext";

type LoaderLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const LoaderLink = ({ href, children, className, ...props }: LoaderLinkProps) => {
  const pathname = usePathname();
  const { startLoading } = useLoader();

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (pathname !== href) {
          startLoading();
        }
      }}
    >
      {children}
    </Link>
  );
};

export default LoaderLink;