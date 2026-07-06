import Link from "next/link";

export default function Nav() {
    return (
      <nav>
        <div className="flex flex-row gap-4">   
            <h1 className="text-5xl font-bold">Nav</h1>
            <Link className="text-2xl font-bold" href="/">Home</Link>
            <Link className="text-2xl font-bold" href="/about">About</Link>
        </div>
      </nav>
    );
  }