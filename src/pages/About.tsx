import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About COOPEC IKIRENGA</h1>
            <p className="text-xl max-w-3xl">
              Leading financial cooperative dedicated to empowering communities through accessible and innovative financial services.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide accessible, reliable, and innovative financial services that empower our members 
                    to achieve their economic goals and improve their quality of life through cooperative principles.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the leading financial cooperative in the region, recognized for excellence in service 
                    delivery, financial inclusion, and sustainable community development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Member-Centric</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our members are at the heart of everything we do. We prioritize their needs and work 
                    tirelessly to exceed their expectations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We conduct our business with the highest ethical standards, transparency, and accountability 
                    in all our operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-3" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We embrace technology and innovation to provide modern financial solutions that meet 
                    the evolving needs of our members.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    COOPEC IKIRENGA was established with a vision to bridge the financial gap in our community 
                    and provide accessible financial services to all members of society.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Since our inception, we have grown from a small cooperative to a leading financial institution, 
                    serving thousands of members across the region with a wide range of financial products and services.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we continue to expand our reach and improve our services, always staying true to our 
                    cooperative principles of mutual support, democratic governance, and community development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
