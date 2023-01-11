import Link from "next/link";

export default function Welcome() {
  return (
    <div>
      <h1>Hello World</h1>
      <br />
      <br />
      <button>
        <Link href={"/Salman"}>Go to Salman Page</Link>
      </button>
      <br />
      <br />
      <button>
        <Link href={"/Anish"}>Go to Anish Page</Link>
      </button>
      <br />
      <br />
      <button>
        <Link href={"/Faiz"}>Go to Faiz Page</Link>
      </button>
    </div>
  );
}
