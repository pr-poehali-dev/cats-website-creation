import { Heart } from "lucide-react";

const CatFooter = () => {
  return (
    <footer className="bg-muted py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">КотоМир</h3>
            <p className="text-muted-foreground">Всё о кошках в одном месте</p>
          </div>
          
          <div className="text-center mb-6 md:mb-0">
            <div className="flex items-center justify-center gap-1 text-sm">
              Сделано с <Heart className="h-4 w-4 fill-accent text-accent" /> для любителей котиков
            </div>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              О проекте
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Помощь
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2023 КотоМир. Все права защищены. Берегите котиков! 🐱
        </div>
      </div>
    </footer>
  );
};

export default CatFooter;
