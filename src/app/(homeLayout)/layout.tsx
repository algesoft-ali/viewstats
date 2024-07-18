import Footer from "@/components/shared/Footer";
// import Navbar from "@/components/shared/Navbar";
import dynamic from "next/dynamic";
import { FC, PropsWithChildren } from "react";
const Navbar = dynamic(() => import("@/components/shared/Navbar"), {
  ssr: false,
});

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-160px)]">{children}</div>
      <Footer />
    </>
  );
};

export default HomeLayout;
