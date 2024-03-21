import type { Metadata } from "next";
import Link from "next/link";

const links = [
  {
    label:'Inicio',
    route:'/'
  },{
    label:'Postear',
    route:'/post'
  },{
    label: 'Perfil',
    route: '/perfil'
  },{
    label: 'Configuracion',
    route:'/config'
  }
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html>
        <body>
        <nav>
        <ul className="flex justify-center space-x-10">
            {links.map(({label, route})=>(
              <li key={route} className="hover:underline">
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      {children}
        </body>
      </html>

  );
}
