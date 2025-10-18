import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, UserCircle, Shield } from "lucide-react";

const Structure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Organizational Structure</h1>
            <p className="text-xl max-w-3xl">
              Our governance structure ensures transparency, accountability, and member participation in decision-making.
            </p>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Governance Bodies</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">General Assembly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The highest decision-making body of the cooperative, comprising all members.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Approves strategic plans and policies</li>
                    <li>Elects Board of Directors</li>
                    <li>Reviews annual financial reports</li>
                    <li>Makes major decisions affecting the cooperative</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Board of Directors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Elected body responsible for overall governance and strategic direction.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Sets strategic direction</li>
                    <li>Approves policies and budgets</li>
                    <li>Oversees management performance</li>
                    <li>Ensures regulatory compliance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <UserCircle className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Management Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Professional team responsible for day-to-day operations and implementation.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Implements Board decisions</li>
                    <li>Manages daily operations</li>
                    <li>Develops operational plans</li>
                    <li>Ensures service quality</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <Building className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">Supervisory Committee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Independent body that monitors and audits the cooperative's operations.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Conducts internal audits</li>
                    <li>Monitors financial controls</li>
                    <li>Reviews compliance</li>
                    <li>Reports to General Assembly</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Operational Departments</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Finance & Accounting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Manages financial operations, reporting, and maintains the cooperative's financial health.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Credit & Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Processes loan applications, manages credit portfolios, and ensures responsible lending.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Savings & Deposits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Manages member savings accounts and deposit services with competitive interest rates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Member Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Provides customer support, handles inquiries, and ensures member satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identifies and mitigates risks to protect the cooperative and its members.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>IT & Digital Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Maintains technology infrastructure and develops digital financial solutions.
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

export default Structure;
