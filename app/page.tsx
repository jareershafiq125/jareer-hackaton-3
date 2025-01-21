import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands/page";
import DressStyle from "@/components/homepage/DressStyle/page";
import Header from "@/components/homepage/Header/page";
import Reviews from "@/components/homepage/Reviews/page";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";
import { client } from "@/sanity/lib/client";

async function getNewArrivals() {
  try {
    console.log('Fetching new arrivals...');
    const query = `*[_type=="products"] {
     _id,discountPercent,category,price,sizes,
    "image":image.asset->url,
    name
    } [15...19]`;
    
    const products = await client.fetch(query);
    console.log('New Arrivals Data:', products);
    
    if (!products || !Array.isArray(products)) {
      console.error('Invalid products data:', products);
      return [];
    }
    
    // Transform the data to match our Product type
    return products.map(product => ({
      ...product,
      id: product._id,
      description: ''
    }));
  } catch (error) {
    console.error('Error fetching new arrivals:', error);
    return [];
  }
}

async function getTopSelling() {
  try {
    console.log('Fetching top selling...');
    const query = `*[_type=="products"] {
     _id,discountPercent,category,price,sizes,
    "image":image.asset->url,
    name
    } [10...14]`;
    
    const products = await client.fetch(query);
    console.log('Top Selling Data:', products);
    
    if (!products || !Array.isArray(products)) {
      console.error('Invalid products data:', products);
      return [];
    }
    
    // Transform the data to match our Product type
    return products.map(product => ({
      ...product,
      id: product._id,
      description: ''
    }));
  } catch (error) {
    console.error('Error fetching top selling:', error);
    return [];
  }
}

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content:
      '"I love how Shop.co curates its collection. Every piece feels carefully chosen, and the quality is consistently impressive. Shopping here has helped me build a wardrobe that I truly love."',
    rating: 5,
    date: "December 9, 2023",
  },
  {
    id: 3,
    user: "James L.",
    content:
      '"The attention to detail in their clothing is remarkable. From the stitching to the choice of fabrics, everything speaks quality. Its refreshing to find a brand that doesnt compromise."',
    rating: 5,
    date: "December 23, 2023",
  },
  {
    id: 4,
    user: "Emily R.",
    content:
      '"What stands out about Shop.co is not just their clothes, but the entire shopping experience. The website is user-friendly, the delivery is prompt, and their customer service is exceptional."',
    rating: 5,
    date: "December 29, 2023",
  },
];

export default async function Home() {
  const newArrivals = await getNewArrivals();
  const topSelling = await getTopSelling();

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <Header />
        <Brands />
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="New Arrivals" data={newArrivals} viewAllLink="/shop" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="Top Selling" data={topSelling} viewAllLink="/shop" />
        </div>
        <DressStyle />
        <Reviews reviewsData={reviewsData} />
      </div>
    </main>
  );
}
