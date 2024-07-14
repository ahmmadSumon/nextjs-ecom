import whitetshirt from "../public/asset/products/whittshirt.jpg"
import denimjacket from "../public/asset/products/denim jacket.jpg"
import blackjeans from "../public/asset/products/skinnyjeans.jpg"
import leatherboots from "../public/asset/products/leatherboots.jpg"
import sportshoodie from "../public/asset/products/sportshoodie.jpg"
import chino from "../public/asset/products/chino.jpg"
import tshirt from "../public/asset/products/tshirt2.jpg"
import puffer from "../public/asset/products/puff.jpg"
import shorts from "../public/asset/products/shorts.jpg"
import belt from "../public/asset/products/belt.jpg"
import summer from "../public/asset/products/su.jpg"
import scarf from "../public/asset/products/woolenscarf.jpg"
import handbag from "../public/asset/products/leatherbag.jpg"
import heels from "../public/asset/products/highheels.jpg"
import yogapants from "../public/asset/products/yogapants.jpg"
import slik from "../public/asset/products/silkblouse.jpg"
import skirt from "../public/asset/products/denimskirt.jpg"
import wintercoat from "../public/asset/products/wintercoat.jpg"
import running from "../public/asset/products/runningshoe.jpg"
import maxi from "../public/asset/products/maxi.jpg"
import kidstshirt from "../public/asset/products/kidstshirt.jpg"
import kidsjeans from "../public/asset/products/kidsjean.jpg"
import kidssnekars from "../public/asset/products/kidssneaker.jpg"
import kidshoodie from "../public/asset/products/kidshoodie.jpg"
import kidsshorts from "../public/asset/products/kidsshort.jpg"
import kidsdress from "../public/asset/products/kidsdress.jpg"
import kidspajamas from "../public/asset/products/kidspajams.jpg"
import kidsraincoat from "../public/asset/products/kidsraincoat.jpg"
import kidsboot from "../public/asset/products/kidsboot.jpg"
import kidshat from "../public/asset/products/kidshat.jpg"



const menClothingItems = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      description: "A timeless white t-shirt made from organic cotton.",
      price: 25.00,
      imageUrl: whitetshirt,
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 2,
      name: "Denim Jacket",
      description: "A stylish denim jacket with a modern fit.",
      price: 60.00,
      imageUrl: denimjacket,
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 3,
      name: "Black Skinny Jeans",
      description: "Comfortable and versatile black skinny jeans.",
      price: 40.00,
      imageUrl: blackjeans,
      sizes: ["28", "30", "32", "34", "36"],
      category: "Men"
    },
    {
      id: 4,
      name: "Leather Boots",
      description: "Premium leather boots for a rugged look.",
      price: 80.00,
      imageUrl: leatherboots,
      sizes: ["7", "8", "9", "10", "11"],
      category: "Men"
    },
    {
      id: 5,
      name: "Sports Hoodie",
      description: "A comfortable hoodie for sports and casual wear.",
      price: 35.00,
      imageUrl: sportshoodie,
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 6,
      name: "Chino Pants",
      description: "Smart-casual chino pants available in multiple colors.",
      price: 50.00,
      imageUrl: chino,
      sizes: ["28", "30", "32", "34", "36"],
      category: "Men"
    },
    {
      id: 7,
      name: "Graphic T-Shirt",
      description: "A t-shirt with a cool graphic design.",
      price: 30.00,
      imageUrl: tshirt,
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 8,
      name: "Puffer Jacket",
      description: "A warm puffer jacket for cold weather.",
      price: 100.00,
      imageUrl: puffer,
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 9,
      name: "Casual Shorts",
      description: "Comfortable and stylish casual shorts.",
      price: 25.00,
      imageUrl: shorts,
      sizes: ["S", "M", "L", "XL"],
      category: "Men"
    },
    {
      id: 10,
      name: "Leather Belt",
      description: "A high-quality leather belt for everyday use.",
      price: 20.00,
      imageUrl:belt,
      sizes: ["M", "L", "XL"],
      category: "Men"
    }
  ];
  const womenClothingItems = [
    {
      id: 11,
      name: "Floral Summer Dress",
      description: "A light and breezy dress perfect for summer days.",
      price: 45.00,
      imageUrl: summer,
      sizes: ["S", "M", "L"],
      category: "Women"
    },
    {
      id: 12,
      name: "Woolen Scarf",
      description: "A cozy woolen scarf to keep you warm in winter.",
      price: 20.00,
      imageUrl: scarf,
      sizes: ["One Size"],
      category: "Women"
    },
    {
      id: 13,
      name: "Leather Handbag",
      description: "A stylish leather handbag for daily use.",
      price: 70.00,
      imageUrl: handbag,
      sizes: ["One Size"],
      category: "Women"
    },
    {
      id: 14,
      name: "High Heels",
      description: "Elegant high heels for special occasions.",
      price: 90.00,
      imageUrl: heels,
      sizes: ["6", "7", "8", "9"],
      category: "Women"
    },
    {
      id: 15,
      name: "Yoga Pants",
      description: "Comfortable and flexible yoga pants.",
      price: 35.00,
      imageUrl: yogapants,
      sizes: ["S", "M", "L", "XL"],
      category: "Women"
    },
    {
      id: 16,
      name: "Silk Blouse",
      description: "A luxurious silk blouse for a sophisticated look.",
      price: 55.00,
      imageUrl: slik,
      sizes: ["S", "M", "L"],
      category: "Women"
    },
    {
      id: 17,
      name: "Denim Skirt",
      description: "A classic denim skirt for casual outings.",
      price: 40.00,
      imageUrl: skirt,
      sizes: ["S", "M", "L"],
      category: "Women"
    },
    {
      id: 18,
      name: "Winter Coat",
      description: "A warm and stylish winter coat.",
      price: 120.00,
      imageUrl: wintercoat,
      sizes: ["S", "M", "L", "XL"],
      category: "Women"
    },
    {
      id: 19,
      name: "Running Shoes",
      description: "Lightweight and comfortable running shoes.",
      price: 80.00,
      imageUrl:running,
      sizes: ["6", "7", "8", "9"],
      category: "Women"
    },
    {
      id: 20,
      name: "Maxi Dress",
      description: "A beautiful maxi dress for any occasion.",
      price: 65.00,
      imageUrl: maxi,
      sizes: ["S", "M", "L"],
      category: "Women"
    }
  ];
  const kidsClothingItems = [
    {
      id: 21,
      name: "Kids' T-Shirt",
      description: "A cute t-shirt with fun graphics.",
      price: 15.00,
      imageUrl: kidstshirt,
      sizes: ["XS", "S", "M"],
      category: "Kids"
    },
    {
      id: 22,
      name: "Kids' Jeans",
      description: "Comfortable and durable jeans for kids.",
      price: 25.00,
      imageUrl:kidsjeans,
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 23,
      name: "Kids' Sneakers",
      description: "Stylish sneakers for everyday wear.",
      price: 30.00,
      imageUrl:kidssnekars,
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 24,
      name: "Kids' Hoodie",
      description: "A cozy hoodie for kids.",
      price: 20.00,
      imageUrl: kidshoodie,
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 25,
      name: "Kids' Shorts",
      description: "Comfortable shorts for kids to play in.",
      price: 15.00,
      imageUrl: kidsshorts,
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 26,
      name: "Kids' Dress",
      description: "A cute and colorful dress for kids.",
      price: 25.00,
      imageUrl: kidsdress,
      sizes: ["XS", "S", "M"],
      category: "Kids"
    },
    {
      id: 27,
      name: "Kids' Pajamas",
      description: "Soft and comfortable pajamas for kids.",
      price: 20.00,
      imageUrl:kidspajamas,
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 28,
      name: "Kids' Raincoat",
      description: "A waterproof raincoat for kids.",
      price: 35.00,
      imageUrl: kidsraincoat,
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 29,
      name: "Kids' Winter Boots",
      description: "Warm and durable winter boots for kids.",
      price: 40.00,
      imageUrl: kidsboot,
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    },
    {
      id: 30,
      name: "Kids' Sun Hat",
      description: "A cute sun hat to protect kids from the sun.",
      price: 12.00,
      imageUrl: kidshat,
      sizes: ["XS", "S", "M", "L"],
      category: "Kids"
    }
  ];

const allProducts = [
    ...menClothingItems,
    ...womenClothingItems,
    ...kidsClothingItems,
  ];
  export { menClothingItems, womenClothingItems, kidsClothingItems, allProducts };