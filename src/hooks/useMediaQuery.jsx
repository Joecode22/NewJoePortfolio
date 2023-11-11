import { useState, useEffect } from "react";

//allows us to pass in a media query and returns a boolean value that tells us when it matches this particular breakpoint for a screen size

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;

// Takes a query as a parameter
// We set the inital value of matches to false.
// We create an effect that runs when the component mounts and when the value of matches changes
// We create a media query using the window.matchMedia() method
// We compare the vale of matches and if they are different, we set the value of matches to the value of media.matches
// We create a listener function that sets the value of matches to the value of media.matches
// We add the listener to the resize event of the window object