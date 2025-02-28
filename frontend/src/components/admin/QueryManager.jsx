import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QueryManager = () => {
  const [queries, setQueries] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      contact: "+91 9876543210",
      message: "When does registration start?",
      status: "Pending",
      reply: "",
      timestamp: "2024-01-15T10:30:00"
    },
    // Add more sample queries here
  ]);

  const [activeQuery, setActiveQuery] = useState(null);

  const handleReply = (id, reply) => {
    setQueries(queries.map(query => 
      query.id === id ? { ...query, reply, status: 'Replied' } : query
    ));
  };

  return (
    <div className="min-h-screen bg-[#030014] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
          Query Management
        </h1>

        <div className="grid gap-6">
          {queries.map((query) => (
            <motion.div
              key={query.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveQuery(activeQuery === query.id ? null : query.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs mr-3 ${
                    query.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-green-500/20 text-green-300'
                  }`}>
                    {query.status}
                  </span>
                  <span className="text-gray-200">{query.name}</span>
                </div>
                <span className="text-purple-400">{activeQuery === query.id ? '−' : '+'}</span>
              </button>

              {activeQuery === query.id && (
                <div className="p-4 border-t border-purple-500/20">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm text-gray-400">Email</label>
                      <p className="text-gray-200">{query.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400">Contact</label>
                      <p className="text-gray-200">{query.contact}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="text-sm text-gray-400">Message</label>
                    <p className="text-gray-200 p-3 bg-black/20 rounded-lg">{query.message}</p>
                  </div>

                  <div className="mb-4">
                    <label className="text-sm text-gray-400">Reply</label>
                    <textarea
                      value={query.reply}
                      onChange={(e) => handleReply(query.id, e.target.value)}
                      className="w-full p-3 bg-black/20 border border-purple-500/20 rounded-lg text-gray-200 focus:border-purple-500 transition-colors"
                      rows="4"
                      placeholder="Type your reply here..."
                    />
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => handleReply(query.id, query.reply)}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg text-white hover:opacity-90 transition-opacity"
                    >
                      Send Reply
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QueryManager;