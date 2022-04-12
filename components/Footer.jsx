const Footer = () => {
  return (
    <>
      <div className="container w-200 mx-auto">
        <div>
          <div className="grid grid-cols-1 divide-y divide-gray-500">
            <div></div>
            <div>
              <br />
              <center>
                <p className="text-left text-black dark:text-gray-200 float-left">
                  © 2021, Roxza
                  <br />
                  <a
                    href="https://github.com/Roxza/Roxza.me"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-500 dark:hover:text-[#EFBF9C] transition-all duration-200"
                  >
                    This website is open source on GitHub.
                  </a>
                </p>
                <p className="font-light text-center text-black dark:text-white float-right">
                  Designed with{" "}
                  <i className="fal fa-heart mx-1 text-pink-400" /> by Roxza
                </p>
              </center>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Footer;
