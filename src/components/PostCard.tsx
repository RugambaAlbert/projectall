import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface PostCardProps {
  image: string;
  title: string;
  date: string;
}

export const PostCard = ({ image, title, date }: PostCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      <CardFooter className="pt-0">
        <p className="text-sm text-muted-foreground">{date}</p>
      </CardFooter>
    </Card>
  );
};
