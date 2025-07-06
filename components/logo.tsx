import Image from "next/image";

import { Duru_Sans } from "next/font/google";

const duruSans = Duru_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

function Logo() {
  return (
    <div className="flex items-center gap-5 flex-row">
      <Image src="/logo.png" alt="ZenDoc Logo" width={36} height={36} />
      <span className={`text-2xl font-bold ${duruSans.className}`}>ZenDoc</span>
    </div>
  );
}

export default Logo;
