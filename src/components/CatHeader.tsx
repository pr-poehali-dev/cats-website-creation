import { Cat } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const CatHeader = () => {
  return (
    <header className="bg-primary/95 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Cat className="h-8 w-8 text-primary-foreground" />
          <h1 className="text-2xl font-bold text-primary-foreground">КотоМир</h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" asChild className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary/80">
            <Link to="/">Главная</Link>
          </Button>
          <Button variant="ghost" asChild className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary/80">
            <Link to="/breeds">Породы</Link>
          </Button>
          <Button variant="ghost" asChild className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary/80">
            <Link to="/gallery">Галерея</Link>
          </Button>
        </nav>
        
        <Button variant="secondary" className="shadow-sm">
          <span>😻 Добавить котика</span>
        </Button>
      </div>
    </header>
  );
};

export default CatHeader;
