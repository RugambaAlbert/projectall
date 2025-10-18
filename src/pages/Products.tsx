import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PiggyBank, CreditCard, TrendingUp, Shield, Home, GraduationCap } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products & Services</h1>
            <p className="text-xl max-w-3xl">
              Comprehensive financial solutions designed to meet your personal and business needs.
            </p>
          </div>
        </section>

        {/* Savings Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Savings Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <PiggyBank className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Regular Savings Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Flexible savings account with competitive interest rates and easy access to your funds.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
                    <li>No minimum balance required</li>
                    <li>Attractive interest rates</li>
                    <li>Free withdrawals</li>
                    <li>Mobile banking access</li>
                  </ul>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Fixed Deposit Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Lock in high interest rates for a fixed period and watch your savings grow.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
                    <li>Higher interest rates</li>
                    <li>Flexible terms (3-24 months)</li>
                    <li>Safe and secure</li>
                    <li>Can serve as loan collateral</li>
                  </ul>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Youth Savings Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Specially designed savings account to help young people build good financial habits.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
                    <li>Special rates for youth</li>
                    <li>Financial education included</li>
                    <li>Low opening balance</li>
                    <li>Digital banking tools</li>
                  </ul>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Loan Products */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Loan Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CreditCard className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Personal Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Quick and easy personal loans for your immediate financial needs.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
                    <li>Competitive interest rates</li>
                    <li>Flexible repayment terms</li>
                    <li>Quick approval process</li>
                    <li>Up to 36 months repayment</li>
                  </ul>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <Home className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Housing Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Realize your dream of home ownership with our affordable housing loans.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
                    <li>Long repayment periods</li>
                    <li>Low interest rates</li>
                    <li>Up to 80% financing</li>
                    <li>Construction and purchase options</li>
                  </ul>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <GraduationCap className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Education Loan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Invest in education with our specialized student and education loans.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4">
                    <li>Covers tuition and expenses</li>
                    <li>Deferred payment options</li>
                    <li>Competitive rates</li>
                    <li>Local and international study</li>
                  </ul>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Mobile Banking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access your accounts anytime, anywhere with our mobile banking platform. Transfer funds, 
                    check balances, and pay bills on the go.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Money Transfer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Send and receive money quickly and securely through our domestic and international 
                    money transfer services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Advisory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get expert financial advice and planning services to help you make informed decisions 
                    about your money and investments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Insurance Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Protect yourself and your assets with our range of insurance products including life, 
                    health, and property insurance.
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

export default Products;
