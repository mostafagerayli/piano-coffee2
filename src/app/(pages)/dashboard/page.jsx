import AddProducts from "@/app/components/pages/dashboard/AddProducts";
import ProductsTable from "@/app/components/pages/dashboard/ProductsTable";

export default function PageDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#2A2A2E] via-[#1E1E22] to-[#161618] p-4 sm:p-6 lg:p-8">

      <div className="mx-auto max-w-7xl space-y-8">

        {/* HEADER */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
            پنل ادمین پیانو کافه
          </h1>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Add Product */}
          <div className="lg:col-span-4">
            <AddProducts />
          </div>

          {/* Products Table */}
          <div className="lg:col-span-8">
            <ProductsTable />
          </div>

        </div>

      </div>
    </main>
  );
}