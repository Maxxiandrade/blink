import Link from "next/link"

const Blink = () => {
    return (
        <Link href={'/'}>
        
        <header className="border border-zinc-100 p-4 rounded-sm">
            <nav>
                    <div className="flex gap-8 items-center justify-center text-4xl">

                        <h1><span className="text-yellow-300">B</span>link💡</h1>
                    </div>

            </nav>
        </header>
          </Link>
  )
}

export default Blink