import Link from "next/link";

export default function Nav() {
    return (
      <nav className="flex flex-row justify-between items-center p-3 text-[#EFECE7] bg-[#919588]">
        <div className="flex flex-row gap-4 flex-start">
          <h1 className="text-4xl font-bold"><Link href="/" className="">Olivia Bisset</Link></h1>
        </div>
        <div className="flex flex-row gap-4 flex-end pr-3">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          {/* <Link href="/education">Education</Link>
          <Link href="/skills">Skills</Link>  */}
        </div>
      </nav>
    );
  }