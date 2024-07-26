export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
        Admin
      </h4>
      {children}
    </>
  );
}
