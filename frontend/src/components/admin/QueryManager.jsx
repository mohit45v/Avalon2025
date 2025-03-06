import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const StatusMessage = ({ queryId, replyStatus }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={`p-2 rounded-lg text-sm mt-4 ${
      replyStatus.isSuccess ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
    }`}
  >
    {replyStatus.isSuccess ? 'Reply sent successfully!' : 'Failed to send reply'}
  </motion.div>
);

const QueryManager = () => {
  const [queries, setQueries] = useState([]);
  const [activeQuery, setActiveQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [replyStatus, setReplyStatus] = useState({ show: false, isSuccess: false, queryId: null });
  // Add new state for sorting
  const [sortByPending, setSortByPending] = useState(true);
  // Add useEffect for fetching queries
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/queries`);
        const sortedQueries = (response.data.queries || []).sort((a, b) => {
          if (sortByPending) {
            if (a.status === 'Pending' && b.status !== 'Pending') return -1;
            if (a.status !== 'Pending' && b.status === 'Pending') return 1;
          }
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setQueries(sortedQueries);
      } catch (error) {
        console.error('Error fetching queries:', error);
        setQueries([]);
      }
      setLoading(false);
    };

    fetchQueries(); // Add this line to call the function
  }, [sortByPending]);
 
  
  // Add delete handler
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/queries/${id}`);
      setQueries(queries.filter(q => q._id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };
  // Add this after your handleDelete function
    const handleReply = async (id, reply) => {
      try {
        const query = queries.find(q => q._id === id);
        const emailTemplate = {
          subject: `Re: Your Query - Avalon 2025`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Avalon 2025 Response</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background-color: #ffffff; border-radius: 8px; overflow: hidden; margin-top: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <tr>
                  <td style="padding: 30px 0; background: linear-gradient(135deg, #9333ea 0%, #ea580c 100%); text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Avalon 2025 Response</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px;">
                    <p style="color: #333; margin-bottom: 20px;">Dear ${query.name},</p>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #9333ea; margin-bottom: 20px; border-radius: 4px;">
                      <p style="color: #666; margin: 0 0 10px 0; font-size: 14px;">Your original query:</p>
                      <p style="color: #333; margin: 0; font-size: 16px;">${query.message}</p>
                    </div>
                    
                    <div style="margin-bottom: 30px;">
                      <p style="color: #666; margin-bottom: 10px; font-size: 14px;">Our response:</p>
                      <p style="color: #333; margin: 0; font-size: 16px; line-height: 1.6;">${reply}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                    <p style="color: #666; margin: 0 0 10px 0; font-size: 14px;">Thank you for contacting Avalon 2025</p>
                    <p style="color: #999; margin: 0; font-size: 12px;">© 2024 Terna Engineering College</p>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `
        };
    
        await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/queries/reply/${id}`, {
          reply,
          emailTemplate
        });
    
        setQueries(queries.map(q => 
          q._id === id ? { ...q, reply, status: 'Replied' } : q
        ));
        setReplyStatus({ show: true, isSuccess: true, queryId: id });
        setTimeout(() => setReplyStatus({ show: false, isSuccess: false, queryId: null }), 3000);
      } catch (error) {
        console.error('Reply error:', error);
        setReplyStatus({ show: true, isSuccess: false, queryId: id });
        setTimeout(() => setReplyStatus({ show: false, isSuccess: false, queryId: null }), 3000);
      }
    };
  // Modify the return statement to add sorting toggle and delete button
  return (
    <div className="min-h-screen bg-[#030014] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
            Queries Management
          </h1>
          <button
            onClick={() => setSortByPending(!sortByPending)}
            className="px-4 py-2 bg-black/40 border border-purple-500/20 rounded-lg text-gray-200 hover:bg-black/60 transition-colors"
          >
            Sort by: {sortByPending ? 'Pending First' : 'Latest First'}
          </button>
        </div>
  
        {loading ? (
          <div className="text-center text-gray-400">Loading queries...</div>
        ) : queries.length === 0 ? (
          <div className="text-center text-gray-400">No queries found</div>
        ) : (
          <div className="grid gap-6">
            {queries
              .sort((a, b) => {
                if (sortByPending) {
                  if (a.status === 'Pending' && b.status !== 'Pending') return -1;
                  if (a.status !== 'Pending' && b.status === 'Pending') return 1;
                }
                return new Date(b.createdAt) - new Date(a.createdAt);
              })
              .map((query) => (
                <motion.div
                  key={query._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setActiveQuery(activeQuery === query._id ? null : query._id)}
                    className="w-full p-4 flex items-center justify-between text-left"
                  >
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs mr-3 ${
                        query.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-green-500/20 text-green-300'
                      }`}>
                        {query.status}
                      </span>
                      <span className="text-gray-200">{query.name}</span>
                    </div>
                    <span className="text-purple-400">{activeQuery === query._id ? '−' : '+'}</span>
                  </button>
  
                  {activeQuery === query._id && (
                    <div className="p-4 border-t border-purple-500/20">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="text-sm text-gray-400">Email</label>
                          <p className="text-gray-200">{query.email}</p>
                        </div>
                      </div>
  
                      <div className="mb-4">
                        <label className="text-sm text-gray-400">Message</label>
                        <p className="text-gray-200 p-3 bg-black/20 rounded-lg">{query.message}</p>
                      </div>
  
                      <div className="mb-4">
                        <label className="text-sm text-gray-400">Reply</label>
                        <textarea
                          defaultValue={query.reply}
                          onChange={(e) => query.reply = e.target.value}
                          className="w-full p-3 bg-black/20 border border-purple-500/20 rounded-lg text-gray-200 focus:border-purple-500 transition-colors"
                          rows="4"
                          placeholder="Type your reply here..."
                        />
                      </div>
  
                      // Add delete button in the actions section
                      <div className="flex justify-end space-x-3">
                        <button
                          onClick={() => handleDelete(query._id)}
                          className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleReply(query._id, query.reply)}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg text-white hover:opacity-90 transition-opacity"
                        >
                          Send Reply
                        </button>
                      </div>
                    {replyStatus.show && replyStatus.queryId === query._id && (
                      <StatusMessage queryId={query._id} replyStatus={replyStatus} />
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryManager;