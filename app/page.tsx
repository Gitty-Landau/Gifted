import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-full flex flex-col">
      <Link href="/items" className="m-auto">
        <Button>Browse our items</Button>
      </Link>
    </div>
  );
};

export default Home;
