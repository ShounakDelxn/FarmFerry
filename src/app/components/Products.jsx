import { ExpandableInfoCard } from "./WaveCard";

export function Products() {
  return (
    <section id="products" className="py-8 mt-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-serif">
          Our Products
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExpandableInfoCard 
            title="Dry Fruits" 
            description="Packed with essential vitamins, minerals, and healthy fats, our premium dry fruits—like almonds, cashews, pistachios, and raisins—offer a nutritious boost for your day." 
            img="/images/Dry-Fruit/dry-fruits.jpg"
            colour={"E0D8CC"} 
            scale={"2.5"}
            expandedImage1="/images/Dry-Fruit/dryfruits-jar.jpg"
            expandedImage2="/images/Dry-Fruit/closeup1.jpg"
            expandedImage3="/images/Dry-Fruit/closeup2.jpg"
            expandedText="At our core, we believe in delivering only the best—every product is carefully curated for quality, functionality, and design."
            margin = "3"
            marginR="3"
            imgH1="12"
            imgH2="12"
          />
          <ExpandableInfoCard 
            title="Groceries" 
            description="From handpicked grains to everyday essentials, our grocery range brings freshness and quality straight to your kitchen. Thoughtfully sourced and packaged to support your daily meals with care" 
            img="/images/Grocerry/grocery.png" 
            colour={"F5E1DA"}
            scale={"1.7"}
            padding="10"
            width="70"
            imgH1="11.5"
            imgH2="8"
            margin = "4"
            marginL="3"
            expandedImage1="/images/Grocerry/image1.jpg"
            expandedImage2="/images/Grocerry/image2.jpg"
            expandedImage3="/images/Grocerry/image3.jpeg"
            expandedText="At our core, we believe in delivering only the best—every product is carefully curated for quality, functionality, and design."
          />
          <ExpandableInfoCard 
            title="Spices" 
            description="Infuse your dishes with bold, aromatic flavors using our range of authentic spices. Carefully selected and packed to preserve their natural oils and essence, they’re the soul of every great recipe." 
            img="/images/Spices/spices-new.png" 
            colour="C86757"
            scale="2"
            padding="12"
            expandedImage1="/images/Spices/new1.jpg"
            expandedImage2="/images/Spices/image2.jpg"
            expandedImage3="/images/Spices/image3.jpg"
            expandedText="At our core, we believe in delivering only the best—every product is carefully curated for quality, functionality, and design."
            imgH2="18"
            imgH1="18"
            margin="3"
            marginR="0"
            width="74"
          />
          <ExpandableInfoCard 
            title="Fruits" 
            description="Handpicked seasonal fruits full of freshness and nutrition.Enjoy the goodness of nature with our fresh, seasonal fruits. Juicy, vibrant, and naturally sweet—each bite delivers a burst of nutrition and taste you can trust." 
            img="/images/Fruits/fruits1.png" 
            colour={"c3debf"} 
            scale="2"
            padding="10"
            expandedImage1="/images/Fruits/image1.jpg"
            expandedImage2="/images/Fruits/image2.jpg"
            expandedImage3="/images/Fruits/image3.jpg"
            expandedText="At our core, we believe in delivering only the best—every product is carefully curated for quality, functionality, and design."
            imgH2="47"
            margin="3"
            width="74"
          />
        </div>
      </div>
    </section>
  );
}
