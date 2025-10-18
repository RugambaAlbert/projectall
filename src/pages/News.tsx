import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/PostCard";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";

const News = () => {
  const allPosts = [
    {
      id: 1,
      image: post1,
      title: "Customer Service Week: COOPEC IKIRENGA reaffirms commitment to excellence",
      date: "October 17, 2025",
    },
    {
      id: 2,
      image: post2,
      title: "COOPEC IKIRENGA trains women entrepreneurs to embrace digital finance",
      date: "June 23, 2025",
    },
    {
      id: 3,
      image: post3,
      title: "COOPEC IKIRENGA engages clients to strengthen long-term relationships",
      date: "June 16, 2025",
    },
    {
      id: 4,
      image: post1,
      title: "New mobile banking features launched to enhance customer experience",
      date: "May 12, 2025",
    },
    {
      id: 5,
      image: post2,
      title: "COOPEC IKIRENGA partners with local businesses for economic growth",
      date: "April 28, 2025",
    },
    {
      id: 6,
      image: post3,
      title: "Financial literacy program reaches over 1000 community members",
      date: "March 15, 2025",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl max-w-3xl">
              Stay informed about the latest news, events, and announcements from COOPEC IKIRENGA.
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allPosts.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
