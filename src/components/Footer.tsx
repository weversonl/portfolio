import SocialNetworkContainer from "./SocialNetworkContainer";

const Footer = () => {
  return (
    <footer className="w-full pt-8 pb-[calc(5rem+env(safe-area-inset-bottom))] sm:pb-[calc(6rem+env(safe-area-inset-bottom))] mt-20">
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
