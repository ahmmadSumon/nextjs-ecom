// Define your Product and Item interfaces
import { menClothingItems, womenClothingItems, kidsClothingItems, allProducts } from '../app/data';  
  
 
 
  // Fetch a single product by ID
  export const getSingleProduct = async (id) => {
    try {
      // Ensure menClothingItems is an array before using find
      if (!Array.isArray(allProducts)) {
        throw new Error('Unexpected data format: menClothingItems is not an array');
      }
  
      const singleItem = allProducts.find((product) => product.id === id);
  
      if (!singleItem) {
        throw new Error(`Product with ID ${id} not found`);
      }
  
      return singleItem;
    } catch (error) {
      console.error('Error fetching single product:', error);
      throw error;
    }
  };
  