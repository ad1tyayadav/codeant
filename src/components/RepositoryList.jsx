import React from 'react';
import { RefreshCcw, Plus, Search } from 'lucide-react';

const repositories = [
  {
    name: 'design-system',
    type: 'Public',
    language: 'React',
    size: '7320 KB',
    updatedAt: '1 day ago'
  },
  {
    name: 'codeant-ci-app',
    type: 'Private',
    language: 'JavaScript',
    size: '5871 KB',
    updatedAt: '2 days ago'
  },
  {
    name: 'analytics-dashboard',
    type: 'Private',
    language: 'Python',
    size: '4521 KB',
    updatedAt: '5 days ago'
  }
];

const RepositoryList = () => {
  return (
    <div className="flex-1 p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Repositories</h1>
          <div className="flex items-center gap-2">
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

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-4">
          {repositories.map((repo, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="font-medium">{repo.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded ${
                    repo.type === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {repo.type}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Updated {repo.updatedAt}
                </div>
              </div>
              <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                <span>{repo.language}</span>
                <span>{repo.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoryList;