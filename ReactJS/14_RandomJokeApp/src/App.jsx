import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCopied, setIsCopied] = useState(false);


  // const btnRef = useRef(null);

  const quoteRef = useRef(null)

  // useEffect(() => { 
  // //  const btnElement = document.getElementById("btn");
  // //  console.log('quoteElement',btnElement);


   
  // //  console.log("btnElement.textContent", btnElement.textContent)

  //  console.log("buttonRef", btnRef)

  //  console.log('buttonRef Current',btnRef?.current);

  // }, [])

  const handleCopy = async () => {
    if(!quoteRef.current) return;

    const textToCopy = quoteRef.current.textContent;
    console.log("textToCopy", textToCopy);

    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true)

      // remove copied 
      setTimeout(() => setIsCopied(false) , 1500)
    }
    catch(err) {
      setError("Copy Failed")
    }
  }


  const fetchQuote = async () => {
    try {
      setIsLoading(true);
      setError("")
      setQuote([])
      const response = await fetch("https://api.quotable.io/quotes/random");
      // console.log("response", response);
      const data = await response.json();
      // console.log("data", data);
      setQuote(data);
    } catch (err) {
      setError("Could not fetch request!")
      console.log(err);
      console.log("error aya", error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xl ">
        <div className="bg-white rounded-3xl shadow-lg border border-neutral-200 p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              Quote Generator
            </h1>

            {/* Subtle copy feedback */}

            {isCopied && (
            <span
              className={`text-xs px-2 py-1 rounded-full border transition opacity-100 border-emerald-300 text-emerald-700`}
              aria-live="polite"
            >
              Copied!
            </span>
            )}

          </div>

          {/* Quote area */}
          <div className="mt-6">
            <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-5">
              {/* Loading state */}
              {isLoading && (
              <div className="animate-pulse space-y-2">
                <div className="h-4 w-3/4 bg-neutral-200 rounded"></div>
                <div className="h-4 w-2/3 bg-neutral-200 rounded"></div>
                <div className="h-4 w-1/3 bg-neutral-200 rounded"></div>
              </div>
            )}

              {/* Error state */}

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

              {/* Quote text */}

              {quote?.length > 0 && (
                <blockquote ref={quoteRef} className="text-neutral-800 text-lg md:text-xl leading-relaxed">
                  {/* Using semantic quotes + em-dash author */}
                  <span id="quote" className="italic">{quote[0].content}</span>
                  <span className="block text-sm text-neutral-500 mt-2">
                    — {quote[0].author}
                  </span>
                </blockquote>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button id="btn" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium border border-neutral-200 bg-neutral-900 text-white hover:bg-neutral-500 active:scale-[.99] transition hover:cursor-pointer"
            onClick={fetchQuote}  >
              {/* small sparkle icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 3l1.546 4.636L18 9.182l-4.454 1.546L12 15.364l-1.546-4.636L6 9.182l4.454-1.546L12 3zM5 18l.773 2.318L8 21.09l-2.227.773L5 24l-.773-2.137L2 21.09l2.227-.772L5 18zm12-2l1.159 3.477L22 21l-3.841 1.523L17 26l-1.159-3.477L12 21l3.841-1.523L17 16z" />
              </svg>
              Get Quote
            </button>

            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 active:scale-[.99] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer" onClick={handleCopy}>
              {/* copy icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 7a3 3 0 013-3h7a3 3 0 013 3v9a3 3 0 01-3 3h-7a3 3 0 01-3-3V7zm-2 2H5a3 3 0 00-3 3v6a3 3 0 003 3h9a3 3 0 003-3v-1h-2v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a1 1 0 011-1h1V9z" />
              </svg>
              Copy
            </button>
          </div>
        </div>

        {/* Footer note (for class) */}
        <p className="text-center text-xs text-neutral-500 mt-4">
          Built in class: API fetch + useRef (copy to clipboard)
        </p>
      </div>
    </div>
  );
};

export default App;
