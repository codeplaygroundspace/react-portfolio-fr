import Hero from '@/components/Hero';
import '@/index.css';
import { Outlet } from 'react-router-dom';
export default function MainLayout() {
  return (
    <div className="w-full grid gap-4 px-4 max-w-[1000px] mx-auto">
      <Hero />
      <Outlet />
    </div>
  );
}
