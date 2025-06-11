import { Banner, Section } from "@/components";
import { FeaturedCategories } from "@/components";

export default function Home() {
  return (
    <>
      <Section>
        <Banner
          bgImage="/assets/images/banner_bg.png"
          image="/assets/images/fresh-apples.png"
          subtitle="Sign up for the daily newsletter"
          title="Dont miss amazing grocey deals"
        />
      </Section>

      <Section>
        <div className="hidden sm:flex mb-[50px]">
          <h2 className="text-heading3 text-blue-300"> Featured Categories </h2>
        </div>
        <FeaturedCategories />
      </Section>
    </>
  );
}
