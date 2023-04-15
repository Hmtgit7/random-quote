import React, { useEffect } from "react";
import axios from "axios";

import Card from "../Components/Card";

export default function Home(props) {
  const [quote, setQuote] = React.useState([]);
  const [tags, setTags] = React.useState([]);
  const [tag, setTag] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [bookmarked, setBookmarked] = React.useState(false);
  const [bookmarks, setBookmarks] = React.useState([]);

  useEffect(() => {
    setBookmarks(JSON.parse(localStorage.getItem("bookmarks")) || []);
    getTags();
    getQuotes();
  }, []);

  const getTags = async () => {
    const tags = await axios.get("https://api.quotable.io/tags");
    tags.data.sort((a, b) => b.quoteCount - a.quoteCount);
    setTags(tags.data);
  };

  const getQuotes = async () => {
    const quotes = await axios.get(
      `https://api.quotable.io/random?tags=${tag}`
    );
    setQuote(quotes.data);

    const bookmarked = bookmarks.find(
      (bookmark) => bookmark._id === quotes.data._id
    );
    bookmarked ? setBookmarked(true) : setBookmarked(false);

    setLoading(false);
  };

  const toggleBookmarkQuote = (id) => {
    if (bookmarked) {
      const newBookmarks = bookmarks.filter(
        (bookmark) => bookmark._id !== quote._id
      );
      setBookmarks(newBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
    } else {
      const newBookmarks = [...bookmarks, quote];
      setBookmarks(newBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#ce00ff] to-[#a021c2] min-h-screen">
      <div className="container m-auto">
        <div className="flex flex-col justify-center items-center">
          <Card
            data={quote}
            loading={loading}
            bookmarked={bookmarked}
            fromBookmark={false}
            methods={{
              getQuotes,
              toggleBookmarkQuote,
              setLoading,
              setBookmarked,
            }}
          />
          
          
        </div>
      </div>
      <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center">
      <select
            className="bg-white rounded-lg shadow-lg p-2 m-2 dropdown justify-center item-center"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            {tags.map((tag) => (
              <option key={tag._id} value={tag.name}>
                {tag.name} - ({tag.quoteCount})
              </option>
            ))}
          </select>
      </div>
      
      <div className="flex flex-row-reverse w-1/2 justify-between items-center space-x-2 m-2">
            {!props.fromBookmark && (
              <button
                className="px-4 py-2 rounded-full shadow-md bg-green-900 hover:bg-green-400"
                onClick={() => {
                  getQuotes();
                  setLoading(true);
                }}
              >
                Next Quote
              </button>
            )}

            </div>
            </div>
    </div>
  );
}
