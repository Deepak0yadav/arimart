// Search component constants and data

export const TRENDING_SEARCHES = [
  "Winter Collection",
  "Gaming Laptop", 
  "Skincare Products",
  "Home Decor",
  "Fitness Equipment"
];

export const POPULAR_CATEGORIES = [
  { name: "Electronics", emoji: "📱" },
  { name: "Fashion", emoji: "👗" },
  { name: "Home & Kitchen", emoji: "🏠" },
  { name: "Beauty", emoji: "💄" },
  { name: "Sports", emoji: "⚽" },
  { name: "Books", emoji: "📚" }
];

export const DEFAULT_RECENT_SEARCHES = [
  "iPhone 15",
  "Samsung Galaxy", 
  "MacBook Pro",
  "Airpods"
];

// Search related utilities
export const addToRecentSearches = (query, currentSearches, maxItems = 4) => {
  if (!query.trim() || currentSearches.includes(query)) return currentSearches;
  
  return [query, ...currentSearches.slice(0, maxItems - 1)];
};

export const removeFromRecentSearches = (index, currentSearches) => {
  return currentSearches.filter((_, i) => i !== index);
};