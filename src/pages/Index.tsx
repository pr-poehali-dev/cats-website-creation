import CatHeader from "@/components/CatHeader";
import HeroBanner from "@/components/HeroBanner";
import CatSection from "@/components/CatSection";
import PopularBreeds from "@/components/PopularBreeds";
import CatFooter from "@/components/CatFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CatHeader />
      
      <main className="flex-grow">
        <HeroBanner />
        <CatSection />
        <PopularBreeds />
        
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Нашли своего пушистого друга?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Поделитесь фотографиями вашего питомца и расскажите его историю другим любителям котиков!
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
              Поделиться историей
            </button>
          </div>
        </section>
      </main>
      
      <CatFooter />
    </div>
  );
};

export default Index;
