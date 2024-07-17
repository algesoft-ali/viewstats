import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import StoreProvider from "@/lib/StoreProvider";
import { FC, PropsWithChildren } from "react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-150px)]">{children}</div>
      <Footer />
    </>
  );
};

export default HomeLayout;
