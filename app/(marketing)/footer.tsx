import Image from 'next/image';
import {Button} from "../../components/ui/button";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="nax-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/en.svg" width={40} height={32} alt="English" className="mr-4 rounded-md" />
          English
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/es.svg" width={40} height={32} alt="Spanish" className="mr-4 rounded-md" />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/it.svg" width={40} height={32} alt="Italian" className="mr-4 rounded-md" />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/fr.svg" width={40} height={32} alt="French" className="mr-4 rounded-md" />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/jp.svg" width={40} height={32} alt="Japanese" className="mr-4 rounded-md" />
          Japanese
        </Button>

      </div>
    </footer>
  );
};

