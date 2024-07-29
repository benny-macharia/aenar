import OfficialCard from "@/components/official-card";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";

export default function Home() {
  return (
        <div className="flex flex-col space-y-5 p-4 items-center justify-center">
          <OfficialCard />
          <OfficialCard />
          <OfficialCard />
          <OfficialCard />
          <OfficialCard />
        </div>
  );
}