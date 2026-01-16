import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { SocialShare } from "@/components/SocialShare";
import { PostCard } from "@/components/PostCard";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import heroImage from "@/assets/hero-corporate.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";

const Index = () => {
  const posts = [
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden group">
        <img
          src={heroImage}
          alt="COOPEC IKIRENGA Building"
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-3xl animate-fade-in">
              Excellence in Financial Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Empowering businesses and individuals with innovative financial solutions
            </p>
          </div>
        </div>
      </section>

      {/* Social Share */}
      <SocialShare />

      {/* Latest Posts Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground relative inline-block w-full">
            <span className="relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-secondary after:rounded-full">
              Latest Post
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div 
                key={post.id} 
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
