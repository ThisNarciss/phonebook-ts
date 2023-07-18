import { SiteAppBar } from '../AppBar/AppBar';
import { Footer } from '../Footer/Footer';
import { Loader } from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <SiteAppBar />
      <Suspense fallback={<Loader height={120} width={120} />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
