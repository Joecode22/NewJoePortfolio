const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/joe_is_coding"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/joecode22" // Replace with your GitHub profile link
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/github-icon-white.png" alt="GitHub icon" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
