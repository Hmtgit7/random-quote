import React, { useEffect } from "react";
import Card from "../Components/Card";

export default function Bookmark() {
  const [bookmarks, setBookmarks] = React.useState([]);
  const [bookmarked, setBookmarked] = React.useState(false);

  useEffect(() => {
    setBookmarks(JSON.parse(localStorage.getItem("bookmarks")) || []);
  }, []);

  const toggleBookmarkQuote = (id) => {
    const newBookmarks = bookmarks.filter((bookmark) => bookmark._id !== id);
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  return (
    <div className="bg-gradient-to-r from-[#ce00ff] to-[#a021c2] min-h-screen">
      <div className="container m-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white m-2">Bookmarks</h1>
          <div className="flex flex-col justify-center items-center">
            {bookmarks.map((bookmark) => (
              <Card
                key={bookmark._id}
                data={bookmark}
                bookmarked={true}
                fromBookmark={true}
                methods={{
                  toggleBookmarkQuote,
                  setBookmarked,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
