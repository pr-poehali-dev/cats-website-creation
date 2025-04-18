import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface CatFeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const CatFeatureCard = ({ icon, title, description }: CatFeatureCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="text-3xl mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CatFeatureCard;
