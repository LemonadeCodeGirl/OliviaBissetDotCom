import Link from "next/link";

export default function Nav() {
    return (
      <nav className="flex flex-row justify-between items-center p-3 text-[#EFECE7] bg-[#919588]">
        <div className="flex flex-row gap-4 flex-start">
          <h1 className="text-4xl font-bold"><Link href="/" className="">Olivia Bisset</Link></h1>
        </div>
        <div className="flex flex-row gap-4 flex-end">
          <Link href="/about">About</Link>
          <Link href="/projects">Experience</Link>
          <Link href="/projects">Education</Link>
          <Link href="/projects">Skills</Link> 
          <Link href="/projects">Projects</Link>
        </div>
      </nav>
    );
  }