import CatFeatureCard from "@/components/CatFeatureCard";

const CatSection = () => {
  const features = [
    {
      icon: "🧬",
      title: "Разнообразие пород",
      description: "От миниатюрных сиамских до крупных мейн-кунов, узнайте о многообразии пород кошек и их особенностях."
    },
    {
      icon: "🏠",
      title: "Как выбрать котёнка",
      description: "Советы по выбору идеального питомца для вашей семьи, учитывая характер, размер жилья и образ жизни."
    },
    {
      icon: "🍽️",
      title: "Правильное питание",
      description: "Рекомендации по здоровому рациону для вашего питомца, чтобы кот был здоров и активен долгие годы."
    }
  ];
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Всё о котиках</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <CatFeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatSection;
