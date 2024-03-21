import Link from "next/link"

const links = [{
    label: 'Home',
    route: '/'
  }, {
    label: 'About',
    route:'/about'
  }, {
    label:'Posts',
    route:'/posts'
  },{
    label:'Register',
    route:'/register'
  },{
    label:'Login',
    route:'/login'
  }]

const Navigation = () => {
    return (
        <header className="border border-zinc-100 p-4 rounded-sm">
            <nav>
                <ul className="flex justify-between items-center">
                    <div className="flex gap-8 items-center">
                        <Link href={'/home'}>
                        <h1 className="hover:underline"><span className="text-yellow-300 hover:underline">B</span>link💡</h1>
                        </Link>
                    </div>
                    <div className="flex gap-8">
                        {links.map(({label, route})=>(
                            <li key={route} className="flex list-none gap-8 hover:underline">
                                <Link href={route}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation