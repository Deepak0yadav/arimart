"use client";

import { useState } from 'react';
import SearchInput from '../../components/search/SearchInput';
import SearchSuggestions from '../../components/search/SearchSuggestions';
import SearchResults from '../../components/search/SearchResults';
import MobileBackButton from '../../components/MobileBackButton';
import { addToRecentSearches, DEFAULT_RECENT_SEARCHES } from '../../components/search/searchConstants';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(DEFAULT_RECENT_SEARCHES);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Add to recent searches
    setRecentSearches(prev => addToRecentSearches(query, prev));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock search results
      const mockResults = [
        { id: 1, name: `${query} - Product 1`, price: 29.99, image: '/placeholder.jpg' },
        { id: 2, name: `${query} - Product 2`, price: 39.99, image: '/placeholder.jpg' },
        { id: 3, name: `${query} - Product 3`, price: 19.99, image: '/placeholder.jpg' },
      ];
      
      setSearchResults(mockResults);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleRecentSearch = (query) => {
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleRemoveRecentSearch = (index) => {
    setRecentSearches(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setHasSearched(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileBackButton />
      <div className="max-w-4xl mx-auto px-4 py-2 md:py-4">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm p-3 md:p-4 mb-3 md:mb-4">
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearch}
            onClear={handleClearSearch}
          />
        </div>

        {/* Search Content */}
        {!hasSearched ? (
          <SearchSuggestions
            recentSearches={recentSearches}
            onRecentSearchClick={handleRecentSearch}
            onRemoveRecentSearch={handleRemoveRecentSearch}
          />
        ) : (
          <SearchResults
            searchQuery={searchQuery}
            searchResults={searchResults}
            isLoading={isSearching}
          />
        )}
      </div>
    </div>
  );
}
