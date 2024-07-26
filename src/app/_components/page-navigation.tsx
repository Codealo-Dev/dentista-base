import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";
import Link from "next/link";

const PageNavigation = () => {
  return (
    <nav className="flex px-6 py-2 border-b items-center">
      <Link href="/">
        <div className="bg-primary p-2 rounded mr-4">
          <Stethoscope className="w-4 h-4 text-background" />
        </div>
      </Link>

      <ul className="flex">
        <li>
          <Button variant="link" asChild>
            <Link href="/sobre-nosotros">Sobre Nosotros</Link>
          </Button>
        </li>
        <li>
          <Button variant="link" asChild>
            <Link href="/contacto">Contacto</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
