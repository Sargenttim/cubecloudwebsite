import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

  

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | CubeCloud</title>
        <meta
          name="description"
          content="Commands page | Minimal and awesome discord bot website created with ❤️"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Anti system ⚙️ ‼️ (Commands are done, still in testing Feel free to use this.)
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">

              This is a testing
            </div>
          </section>
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>


      <Footer />
    </motion.div>
  );
}

export default PrivacyPolicy;
