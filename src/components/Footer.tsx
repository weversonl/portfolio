import SocialNetworkContainer from "./SocialNetworkContainer";

const Footer = () => {
  return (
    <footer className="w-full pt-8 pb-20 sm:pb-24 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Weverson Lemos. All rights reserved.
          </p>
          <SocialNetworkContainer />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
