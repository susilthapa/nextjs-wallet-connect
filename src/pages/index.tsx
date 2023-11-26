import { ReactElement } from "react";
import dynamic from "next/dynamic";

const Connect = dynamic(() => import("@/components/Connect"), { ssr: false });

const Home = () => {
  return <Connect />;
};

export default Home;
