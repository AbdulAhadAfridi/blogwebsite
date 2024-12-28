"use client";
import React, { useState } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() === "") {
      alert("Comment cannot be empty!");
      return;
    }

    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
        Share Your Thoughts
      </h3>

      {/* Comment submission form */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          value={newComment}
          onChange={handleChange}
          placeholder="Write a comment..."
          aria-label="Write a comment"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
        <button
          type="submit"
          aria-label="Post comment"
          className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all"
        >
          Post
        </button>
      </form>

      {/* Comments list */}
      <div className="comments-list">
        {comments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="border-b pb-4 text-gray-700 dark:text-gray-300 transition-transform transform hover:scale-105"
              >
                <p>{comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
