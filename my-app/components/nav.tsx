import Link from "next/link";

export default function Nav() {
    return (
      <nav className="flex flex-row justify-between items-center p-3 text-foreground bg-surface shadow-lg shadow-neutral-dark/20 sticky top-0 z-10">
        <div className="flex flex-row gap-4 flex-start">
          <h1 className="text-3xl font-bold font-serif"><Link href="/" className="">Olivia Bisset</Link></h1>
        </div>
        <div className="flex flex-row gap-4 flex-end pr-3">
          <Link href="/about" className="hover:text-accent-pale transition-colors">About</Link>
          <Link href="/projects" className="hover:text-accent-pale transition-colors">Projects</Link>
          <Link href="/experience" className="hover:text-accent-pale transition-colors">Experience</Link>
          {/* <Link href="/education">Education</Link>
          <Link href="/skills">Skills</Link>  */}
        </div>
      </nav>
    );
  }