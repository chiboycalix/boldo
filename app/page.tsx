
import Banner from "@/components/home/Banner";
import Campaign from "@/components/home/Campaign";
import OurBlog from "@/components/home/OurBlog";
import ResearchAndDevelopment from "@/components/home/ResearchAndDevelopment";
import Services from "@/components/home/Services";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import Footer from "@/components/layout/Footer";


const HomePage = () => {
  return (
    <main className="w-screen">
      <Banner />
      <Services />
      <TestimonialSlider />
      <ResearchAndDevelopment />
      <OurBlog />
      <Campaign />
      <Footer />
    </main>
  )
}

export default HomePage;