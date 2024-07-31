import OfficialDetails from "@/components/official-details"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-col items-center justify-center p-4">
        <OfficialDetails />
        {children}
        </div>
    )
  }