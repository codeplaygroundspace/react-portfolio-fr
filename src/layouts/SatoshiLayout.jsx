import Hero from '@/components/Hero';
import '@/satoshi.css';
import { Link, Outlet } from 'react-router-dom';
export default function SatoshiLayout() {
  return (
    <div>
      <header>
        <Link to="/">Access secret room</Link>
      </header>
      <Hero />
      <Outlet />
    </div>
  );
}
