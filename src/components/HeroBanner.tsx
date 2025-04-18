import { Button } from "./ui/button";

const HeroBanner = () => {
  return (
    <div className="relative bg-muted overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
      
      <div className="container relative mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Мир удивительных котиков
        </h1>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl">
          Узнайте всё о породах, особенностях и характере кошек. Смотрите милые фотографии и находите своего идеального пушистого друга!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="font-medium">
            Познакомиться с породами
          </Button>
          <Button size="lg" variant="outline" className="font-medium">
            Смотреть галерею
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
