import Image from "next/image";

export default function ProductRow({ p, onEdit, onDelete }) {
  return (
    <tr className="border-t border-[#4A4A50] hover:bg-[#3A3A42]/40 transition">

      <td className="px-6 py-5 text-white">{p.name}</td>

      <td className="px-6 py-5 text-[#D4AF37]">
        {Number(p.price).toLocaleString()}
      </td>

      <td className="px-6 py-5 text-gray-300">
        <p className="truncate max-w-[200px]">
          {p.description}
        </p>
      </td>

      <td className="px-6 py-5">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-xl object-cover"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center text-xs">
            no img
          </div>
        )}
      </td>

      <td className="px-6 py-5">
        <div className="flex gap-2 justify-center">

          {/* EDIT */}
          <button
            onClick={() => onEdit(p)}
            className="px-4 py-2 bg-blue-600 rounded-xl"
          >
            آپدیت
          </button>

          {/* DELETE ✔️ FIXED */}
          <button
            onClick={() => onDelete(p)}
            className="px-4 py-2 bg-red-600 rounded-xl"
          >
            حذف
          </button>

        </div>
      </td>

    </tr>
  );
}