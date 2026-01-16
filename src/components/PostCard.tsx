import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface PostCardProps {
  id: number;
  image: string;
  title: string;
  date: string;
}

export const PostCard = ({ id, image, title, date }: PostCardProps) => {
  return (
    <Link to={`/news#post-${id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer group hover:translate-y-[-8px] border-transparent hover:border-secondary/30">
        <div className="overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <CardHeader className="pb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
        </CardHeader>
        <CardFooter className="pt-0">
          <p className="text-sm text-muted-foreground group-hover:text-secondary transition-colors duration-300">{date}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};
