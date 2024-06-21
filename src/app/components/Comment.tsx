// Client-side rendering
"use client";

// Importing React and Next.js components
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCopilotReadable, CopilotKit } from "@copilotkit/react-core";
import {
  CopilotTextarea,
  HTMLCopilotTextAreaElement,
} from "@copilotkit/react-textarea";

// Define the Comment component
export default function Comment() {
  // State variables for comment, comments, and article content
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [articleContent, setArticleContent] = useState("");
  useCopilotReadable({
    description: "Blog article outline",
    value: articleContent,
    //convert: convertToJSON // Ensure custom conversion if needed
  });

  const copilotTextareaRef = useRef<HTMLCopilotTextAreaElement>(null);

  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {/* Form for submitting a comment */}
      <form action={""} className="border border-teal-500 rounded-md p-3 mb-4">
        {/* Textarea for entering a comment */}
        <CopilotKit runtimeUrl="/api/copilotkit">
        <form
          action={""}
          className="border border-teal-500 rounded-md p-3 mb-4">
          <textarea
            id="content"
            name="content"
            placeholder="Add a comment..."
            rows={3}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="hidden"
          />

          <CopilotTextarea
            className="p-4 w-full rounded-lg mb-2 border text-sm border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
            ref={copilotTextareaRef}
            placeholder="Start typing for content autosuggestion."
            onChange={(event) => setComment(event.target.value)}
            rows={5}
            autosuggestionsConfig={{
              textareaPurpose: articleContent,
              chatApiConfigs: {
                suggestionsApiConfig: {
                  forwardedParams: {
                    max_tokens: 5,
                    stop: ["\n", ".", ","],
                  },
                },
                insertionApiConfig: {},
              },
              debounceTime: 250,
            }}
          />

          <div className="flex justify-between items-center mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </CopilotKit>
        <textarea
          id="content"
          name="content"
          placeholder="Add a comment..."
          rows={3}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="hidden"
        />

        {/* Submit button */}
        <div className="flex justify-between items-center mt-5">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>

      {/* Comments section */}
      <p className="text-white mb-2">Comments:</p>

      {/* Comment item (currently hardcoded) */}
      <div key={""} className="flex p-4 border-b dark:border-gray-600 text-sm">
        <div className="flex-shrink-0 mr-3">
          {/* Profile picture */}
          <Image
            className="w-10 h-10 rounded-full bg-gray-200"
            src={`(link unavailable){encodeURIComponent(
              "Silhouette"
            )}`}
            width={500}
            height={500}
            alt="Profile Picture"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            {/* Username (currently hardcoded as "Anonymous") */}
            <span className="font-bold text-white mr-1 text-xs truncate">
              Anonymous
            </span>
          </div>
          {/* Comment text (currently hardcoded as "No Comments") */}
          <p className="text-gray-500 pb-2">No Comments</p>
        </div>
      </div>
    </div>
  );
}