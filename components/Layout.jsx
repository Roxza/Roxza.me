/* Header, Footer */
import Header from "./Header";
import Footer from "./Footer";
import Toggle from "./Theme/toggle";

export default function Layout({ children }) {
  return (
    <div className="dark:bg-black bg-white">
      <Toggle />
      <Header />
      <main className="overflow-y-hidden md:overflow-y-visible min-h-[calc(100vh-14px)] max-w-screen-lg p-5 w-full md:py-10 md:w-10/12 lg:py-1 lg:w-[800px] mx-auto transition-all duration-300">
        {children}
        <Footer />
      </main>
    </div>
  );
}
