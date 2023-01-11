import Link from "next/link";

export default function Name({ params }: { params: { name: string } }) {
  return (
    <div>
      My name is {params.name}
      <br />
      <br />
      <button>
        <Link href={"/"}>Go to Home Page</Link>
      </button>
    </div>
  );
}
