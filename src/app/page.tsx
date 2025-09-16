import Screen from '@/components/screen';
import Clerkboxslider from './Clerkboxslider';

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 bg-[#131316] p-8 pb-20 font-sans sm:p-20">
      {/* <Screen /> */}
      <Clerkboxslider />
    </div>
  );
}
