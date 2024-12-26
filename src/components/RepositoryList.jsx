import React, { useState } from 'react';
import { RefreshCcw, Plus, Search } from 'lucide-react';
import repositories from '../../public/Data/Repodata.js';

const RepositoryList = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter repositories based on the search query
  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 p-6">
      <div className="flex flex-col bg-white shadow-xl p-4 gap-6 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Repositories</h1>
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <RefreshCcw size={18} />
              <span>Refresh All</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              <Plus size={18} />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full sm:w-80 pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
            value={searchQuery} // Bind the input value to the state
            onChange={(e) => setSearchQuery(e.target.value)} // Update the state on input change
          />
        </div>

        {/* Repository List */}
        <div>
          {filteredRepositories.length > 0 ? (
            filteredRepositories.map((repo, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <h3 className="font-medium">{repo.name}</h3>
                    <span className="px-2 py-1 text-xs text-[#2b6ad7] rounded-full bg-[#eff8ff]/75">
                      {repo.type}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-12 text-sm text-gray-600">
                  <span className="flex">
                    {repo.language}
                    <img
                      className="w-8 relative bottom-1"
                      src="https://cdn-icons-png.flaticon.com/512/9868/9868674.png"
                      alt=""
                    />
                  </span>
                  <span>{repo.size}</span>
                  <span>{repo.updatedAt}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No repositories found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepositoryList;