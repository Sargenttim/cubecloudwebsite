import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function policy () {
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
            <label className="box-title p-color" htmlFor="cb1">
              Anti system ⚙️ ‼️ (Commands are done, still in testing Feel free to use this.)
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Backups (Works, Tested)</kbd> -{" "}
                  <span className="p-color">Make a Server backup for all your needs, can restore as well when needed.</span>
                </li>
                <li>
                  <kbd>Anti-Nuke (Working)</kbd> -{" "}
                  <span className="p-color">Prevents mass bans, kicks, channel deletions, ETC</span>
                </li>
                <li>
                  <kbd>Anti-Spam (Working)</kbd> -{" "}
                  <span className="p-color">Limit message spam, pings, and mass invites.</span>
                </li>
                <li>
                  <kbd>Anti-Raid (Working)</kbd> -{" "}
                  <span className="p-color">Control rapid joins to prevent raids.</span>
                </li>
                <li>
                  <kbd>Anti-Bot Join (Coming Soon!)</kbd> -{" "}
                  <span className="p-color">Restrict unauthorized bot accounts from joining.</span>
                </li>
                <li>
                  <kbd>Anti-Webhook (Coming Soon!)</kbd> -{" "}
                  <span className="p-color">Monitor webhook creation and deletion.</span>
                </li>
                <li>
                  <kbd>Anti-Invite Spam (Coming Soon!)</kbd> -{" "}
                  <span className="p-color">Prevent unauthorized invite links.</span>
                </li>
                <li>
                  <kbd>Anti-Alt Account (Working)</kbd> -{" "}
                  <span className="p-color">Block new or suspicious accounts.</span>
                </li>
                <li>
                  <kbd>Anti-Link (Working)</kbd> -{" "}
                  <span className="p-color">Block untrusted Links.</span>
                </li>
                <li>
                  <kbd>Anti-NSFW (Coming Soon!)</kbd> -{" "}
                  <span className="p-color">Restrict NSFW content in non-NSFW channels.</span>
                </li>
                <li>
                  <kbd>Anti-Swear (Working)</kbd> -{" "}
                  <span className="p-color">Filter out swear workds and imappropriate language.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
