
import Image from 'next/image';
import Link from 'next/link';
import RedirectAuthenticated from './RedirectAuthenticated';
import Blink from './components/Blink';



const Demo = () => {

  return (
    <>
    <RedirectAuthenticated>
    <Blink/>
    <div className="flex justify-left items-center mt-11 ">
      <div className="w-1/2 ml-5">
        <h1 className="text-2xl"><span className="text-yellow-300 hover:underline">B</span>link💡 es una plataforma de redes sociales diseñada para permitir a los usuarios compartir sus pensamientos, ideas y experiencias a través de publicaciones. Con una interfaz intuitiva y fácil de usar, <span className="text-yellow-300 hover:underline">B</span>link💡 ofrece a los usuarios la capacidad de compartir sus publicaciones, interactuar con otras personas y descubrir contenido interesante.</h1>

        <br />
        <h2 className='text-xl'>
          En <span className="text-yellow-300 hover:underline">B</span>link💡 podrás:
        </h2>
        <br />

        <h3 className='text-lg'>
          &bull; Crear publicaciones: Los usuarios pueden crear y compartir sus publicaciones en <span className="text-yellow-300 hover:underline">B</span>link💡. Ya sea texto, imágenes o videos, <span className="text-yellow-300 hover:underline">B</span>link💡 ofrece una variedad de formatos para expresar ideas y experiencias.
        </h3>
        <br />

        <h3 className='text-lg'>
          &bull; Interacción social: Los usuarios pueden interactuar con las publicaciones de otros usuarios de diversas formas. Pueden dar &quot;me gusta&quot; a las publicaciones que encuentren interesantes y comentar para compartir sus pensamientos. 
        </h3>
        <br />

        <h3 className='text-lg'>
          &bull; Perfil personalizado: Cada usuario tiene un perfil personalizado donde pueden mostrar su biografía, compartir enlaces a sus otras redes sociales y mostrar su actividad en la plataforma, como las publicaciones que han creado y las que han interactuado.
        </h3>
        <br />

        <h3 className='text-lg'>
          &bull; Privacidad y seguridad: <span className="text-yellow-300 hover:underline">B</span>link💡 se compromete a proteger la privacidad y seguridad de sus usuarios, así como medidas de seguridad para proteger contra el acoso y el comportamiento inapropiado.
        </h3>
        <br />

        <h4 className='text-md'>
          En resumen, Blink es una plataforma de redes sociales dinámica que ofrece a los usuarios la oportunidad de compartir sus ideas, conectarse con otros y descubrir contenido interesante. Con una comunidad activa y una amplia gama de características, <span className="text-yellow-300 hover:underline">B</span>link💡 es el lugar perfecto para expresarse y conectar con otros en línea.
        </h4>
        <br />
        <div className='space-x-32'>
        <Link href='/register'>
        <button className='bg-yellow-600 p-5 rounded-md text-black font-bold hover:scale-105 transition'>Registrate</button>
        </Link>
        <Link href='/login'>
         <span><button className='bg-yellow-600 p-5 rounded-md text-black font-bold hover:scale-105 transition'>Inicia sesion</button></span>
        </Link>
        </div>
      </div>
      {/* Aquí puedes agregar las capturas de pantalla en la mitad derecha de la pantalla */} 
      <aside className='ml-56'>
        <Image src='/blink_image.jpg' height={500} width={500} alt="blink_pic" />
      </aside>
    </div>
    </RedirectAuthenticated>
    </>
  );
}

export default Demo;
