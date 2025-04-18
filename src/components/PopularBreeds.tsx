import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const PopularBreeds = () => {
  const breeds = [
    {
      name: "Мейн-кун",
      image: "/placeholder.svg",
      traits: ["Крупный", "Дружелюбный", "Спокойный"]
    },
    {
      name: "Сиамская",
      image: "/placeholder.svg",
      traits: ["Умная", "Общительная", "Активная"]
    },
    {
      name: "Британская короткошёрстная",
      image: "/placeholder.svg",
      traits: ["Плюшевая", "Независимая", "Уравновешенная"]
    }
  ];
  
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Популярные породы</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Познакомьтесь с самыми популярными породами кошек и их особенностями
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {breeds.map((breed, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] relative">
                <img 
                  src={breed.image} 
                  alt={breed.name} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="text-xl font-bold mb-3">{breed.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {breed.traits.map((trait, idx) => (
                    <Badge key={idx} variant="secondary">{trait}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="/breeds" className="text-primary font-medium hover:underline">
            Посмотреть все породы →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularBreeds;
