'use client'
// components/RedirectAuthenticated.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from './hooks/useIsAuthed';

interface RedirectAuthenticatedProps {
  children: React.ReactNode;
}

const RedirectAuthenticated: React.FC<RedirectAuthenticatedProps> = ({ children }) => {
  const { isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push('/'); // Redirige a la página principal si el usuario está autenticado
    }
  }, [isAuth, router]);

  // Renderiza los hijos si el usuario no está autenticado
  return <>{!isAuth && children}</>;
};

export default RedirectAuthenticated;
