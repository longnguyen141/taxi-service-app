import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-5xl font-bold text-title mb-4">
        401 - Không đủ quyền truy cập trang này
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Bạn chưa sử dụng dịch vụ của chúng tôi đúng không. Hãy sử dụng dịch của
        chúng tôi sau đó quay lại nhé.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded shadow hover:bg-yellow-500 transition"
      >
        Quay về Trang chủ
      </Link>
    </div>
  );
}
