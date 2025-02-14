import HNav from '@/src/app/ui/nav/HNav';
import ThemePicker from '@/src/app/ui/themes/ThemePicker';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HNav>
        <ThemePicker />
      </HNav>
      {children}
    </>
  );
}
