import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link
        href={"/products/new"}
        className="bg-blue-900 text-white rounded-md py-1 px-2"
      >
        Add new product
      </Link>
    </Layout>
  );
}
