// import HeroSection from "@/components/hero";
// import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <div className="mt-40">
//       <HeroSection />

//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {statsData.map((statsData, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
//                 <div className="text-gray-600">{statsData.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuresData.map((feature, index) => (
//               <Card key={index} className="p-6">
//                 <CardContent className="space-y-4 pt-4">
//                   {feature.icon}
//                   <h3 className="text-xl font-semibold">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-16">How it Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {howItWorksData.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
//                 <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonialsData.map((testimonial, index) => (
//               <Card key={index} className="p-6">
//                 <CardContent className=" pt-4">
//                   <div className="flex items-center mb-4">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       width={40}
//                       height={40}
//                       className="rounded-full" />
//                       <div className="ml-4">
//                         <div className="font-semibold">{testimonial.name}</div>
//                         <div className="text-sm text-gray-600">{testimonial.role}</div>
//                         <div></div>
//                       </div>
//                   </div>
//                   <p className=" text-gray-600">{testimonial.quote}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>


//             <section className="py-20 bg-blue-600">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Finances? </h2>
//           <p className="text-blue-100 mb-8 max-w-2xl mx-auto"> Join our community today and take the first step towards financial freedom</p>

//           <Link href="/dashboard">
//           <Button size="lg"
//           className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">
//             Start Free Trial
//             </Button>
//             </Link>
//         </div>
//       </section>
//     </div>
//   );
// }
// import HeroSection from "@/components/hero";
// import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <div className="mt-40">
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Financial Visualizations Section (Below Hero Image) */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold text-blue-600 mb-4">Financial Visualizations</h2>
//           <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
//             Interactive tools to visualize your financial journey and make informed decisions for a secure future.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//             <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
//               <Card className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition cursor-pointer">
//                 <CardContent>
//                   <h3 className="text-xl font-semibold mb-2">Compound Interest</h3>
//                   <p className="text-gray-600">Watch your investments grow exponentially over time.</p>
//                 </CardContent>
//               </Card>
//             </Link>

//             <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
//               <Card className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition cursor-pointer">
//                 <CardContent>
//                   <h3 className="text-xl font-semibold mb-2">Dynamic Budget Analytics</h3>
//                   <p className="text-gray-600">Interactive budget tracking with live insights and recommendations.</p>
//                 </CardContent>
//               </Card>
//             </Link>

//             <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
//               <Card className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition cursor-pointer">
//                 <CardContent>
//                   <h3 className="text-xl font-semibold mb-2">Loan Calculator</h3>
//                   <p className="text-gray-600">Plan your loan payments and compare different options.</p>
//                 </CardContent>
//               </Card>
//             </Link>

//             <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
//               <Card className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition cursor-pointer">
//                 <CardContent>
//                   <h3 className="text-xl font-semibold mb-2">Retirement Planning</h3>
//                   <p className="text-gray-600">Secure your financial future with smart planning tools.</p>
//                 </CardContent>
//               </Card>
//             </Link>
//           </div>

//           <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
//             <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
//               Open Financial Visualizations
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {statsData.map((statsData, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
//                 <div className="text-gray-600">{statsData.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuresData.map((feature, index) => (
//               <Card key={index} className="p-6">
//                 <CardContent className="space-y-4 pt-4">
//                   {feature.icon}
//                   <h3 className="text-xl font-semibold">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-16">How it Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {howItWorksData.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
//                 <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
//                 <p className="text-gray-600">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonialsData.map((testimonial, index) => (
//               <Card key={index} className="p-6">
//                 <CardContent className="pt-4">
//                   <div className="flex items-center mb-4">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       width={40}
//                       height={40}
//                       className="rounded-full"
//                     />
//                     <div className="ml-4">
//                       <div className="font-semibold">{testimonial.name}</div>
//                       <div className="text-sm text-gray-600">{testimonial.role}</div>
//                     </div>
//                   </div>
//                   <p className="text-gray-600">{testimonial.quote}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-blue-600">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Finances?</h2>
//           <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join our community today and take the first step towards financial freedom.
//           </p>

//           <Link href="/dashboard">
//             <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">
//               Start Free Trial
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mt-40">
      {/* Hero Section */}
      <HeroSection />

      {/* Financial Visualizations Section (Below Hero Image) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Financial Visualizations</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Interactive tools to visualize your financial journey and make informed decisions for a secure future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
              <Card className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition cursor-pointer">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">Compound Interest</h3>
                  <p className="text-gray-600">Watch your investments grow exponentially over time.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
              <Card className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition cursor-pointer">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">Dynamic Budget Analytics</h3>
                  <p className="text-gray-600">Interactive budget tracking with live insights and recommendations.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
              <Card className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition cursor-pointer">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">Loan Calculator</h3>
                  <p className="text-gray-600">Plan your loan payments and compare different options.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
              <Card className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition cursor-pointer">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">Retirement Planning</h3>
                  <p className="text-gray-600">Secure your financial future with smart planning tools.</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <Link href="https://f-inance-gpt.vercel.app/visualizations" target="_blank">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Open Financial Visualizations
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community today and take the first step towards financial freedom.
          </p>

          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
