import AddProducts from "@/app/components/pages/dashboard/AddProducts";
import ProductsTable from "@/app/components/pages/dashboard/ProductsTable";

export default function PageDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2A2A2E] via-[#1E1E22] to-[#161618] p-4 md:p-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 xl:grid-cols-12 gap-8">

        {/* Add Product */}
        <div className="xl:col-span-4">
          <AddProducts />
        </div>

        {/* Products Table */}
        <div className="xl:col-span-8">
          <ProductsTable />
        </div>

      </div>
    </main>
  );
}