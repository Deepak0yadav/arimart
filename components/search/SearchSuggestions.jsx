"use client";

import RecentSearches from "./RecentSearches";

export default function SearchSuggestions({ 
  recentSearches = [],
  onRecentSearchClick,
  onRemoveRecentSearch,
  visible = true
}) {
  if (!visible) return null;

  return (
    <div className="space-y-6">
      <RecentSearches
        searches={recentSearches}
        onSearchClick={onRecentSearchClick}
        onRemoveSearch={onRemoveRecentSearch}
      />
    </div>
  );
}