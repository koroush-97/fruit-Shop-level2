import { Banner, Section } from "@/components";

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
    </>
  );
}
