import React from "react";

import LoadingSpinner from "./LoadingSpinner";

import { BookmarkIcon, BookmarkSlashIcon } from "@heroicons/react/24/outline";

export default function Card(props) {
  return (
    <div className="w-1/2 h-50 m-4">
      <div className="w-full h-full bg-red-400 rounded-3xl shadow-lg p-4 m-auto items-end">
        <div className="flex flex-col flex-wrap h-full justify-between items-center">
          <div className="text-center">
            {props.loading ? (
              <LoadingSpinner />
            ) : (
              <div className="w-full">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {props.data.content}
                </h1>
                
              </div>
            )}
          </div>
          <div className=" w-1/2 flex justify-center my-6 items-center">
          <span className=" text-xm text-white  m-auto items-center">
                  - {props.data.author}
                </span>
            <button
              className=" items-end text-gray-800 rounded-lg shadow-md hover:bg-gray-100 "
              onClick={() => {
                props.methods.setBookmarked(!props.bookmarked);
                props.methods.toggleBookmarkQuote(props.data._id);
              }}
            >
              {props.bookmarked ? (
                <BookmarkSlashIcon className="h-5 w-5 text-gray-800"/>
              ) : (
                <BookmarkIcon className="h-5 w-5" />
              )}
            </button>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row-reverse w-1/2 justify-between items-center space-x-2 m-2">
            {!props.fromBookmark && (
              <button
                className="px-4 py-2 rounded-lg shadow-md bg-green-200 hover:bg-green-400"
                onClick={() => {
                  props.methods.getQuotes();
                  props.methods.setLoading(true);
                }}
              >
                Next Quote
              </button>
            )}
            </div> */}
      </div>
  );
}
