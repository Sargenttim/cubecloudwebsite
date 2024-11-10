import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
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
              Anti system ⚙️ ‼️ (This is a WIP system.)
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Backups</kbd> -{" "}
                  <span className="p-color">Make a Server backup for all your needs, can restore as well when needed.</span>
                </li>
                <li>
                  <kbd>Anti-Nuke</kbd> -{" "}
                  <span className="p-color">Prevents mass bans, kicks, channel deletions, ETC</span>
                </li>
                <li>
                  <kbd>Anti-Spam</kbd> -{" "}
                  <span className="p-color">Limit message spam, pings, and mass invites.</span>
                </li>
                <li>
                  <kbd>Anti-Raid</kbd> -{" "}
                  <span className="p-color">Control rapid joins to prevent raids.</span>
                </li>
                <li>
                  <kbd>Anti-Bot Join</kbd> -{" "}
                  <span className="p-color">Restrict unauthorized bot accounts from joining.</span>
                </li>
                <li>
                  <kbd>Anti-Webhook</kbd> -{" "}
                  <span className="p-color">Monitor webhook creation and deletion.</span>
                </li>
                <li>
                  <kbd>Anti-Invite Spam</kbd> -{" "}
                  <span className="p-color">Prevent unauthorized invite links.</span>
                </li>
                <li>
                  <kbd>Anti-Malware</kbd> -{" "}
                  <span className="p-color">Black harmful or suspicious links.</span>
                </li>
                <li>
                  <kbd>Anti-Alt Account</kbd> -{" "}
                  <span className="p-color">Block new or suspicious accounts.</span>
                </li>
                <li>
                  <kbd>Role/Permission Protection</kbd> -{" "}
                  <span className="p-color">Protect importent roles and permissions.</span>
                </li>
                <li>
                  <kbd>Anti-Link</kbd> -{" "}
                  <span className="p-color">Block untrusted Links.</span>
                </li>
                <li>
                  <kbd>Anti-NSFW</kbd> -{" "}
                  <span className="p-color">Restrict NSFW content in non-NSFW channels.</span>
                </li>
                <li>
                  <kbd>Anti-Swear</kbd> -{" "}
                  <span className="p-color">Filter out swear workds and imappropriate language.</span>
                </li>
                <li>
                  <kbd>Anti-Scam Detection</kbd> -{" "}
                  <span className="p-color">Identify and block common scams.</span>
                </li>
                <li>
                  <kbd>Anti-Phishing Detection</kbd> -{" "}
                  <span className="p-color">Block links and messages known for phishing scams.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Administrator ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>A.I</kbd> -{" "}
                  <span className="p-color">Manage AI Channels for your server.</span>
                </li>
                <li>
                  <kbd>Boost log</kbd> -{" "}
                  <span className="p-color">Manage the boost logging system.</span>
                </li>
                <li>
                  <kbd>Counting</kbd> -{" "}
                  <span className="p-color">Manage the counting system for your server.</span>
                </li>
                <li>
                  <kbd>Events</kbd> -{" "}
                  <span className="p-color">Create and manage server events interactively.</span>
                </li>
                <li>
                  <kbd>Global Chat</kbd> -{" "}
                  <span className="p-color">Manage Global chat.</span>
                </li>
                <li>
                  <kbd>Giveaway</kbd> -{" "}
                  <span className="p-color">Mangage Giveaways.</span>
                </li>
                <li>
                  <kbd>Join To Create VC</kbd> -{" "}
                  <span className="p-color">Manage the Join-To-Create System.</span>
                </li>
                <li>
                  <kbd>Leveling</kbd> -{" "}
                  <span className="p-color">Manage the Leveling System.</span>
                </li>
                <li>
                  <kbd>Role</kbd> -{" "}
                  <span className="p-color">Manage roles of the Server or Members.</span>
                </li>
                <li>
                  <kbd>Logging (WIP SYSTEM)</kbd> -{" "}
                  <span className="p-color">Set up Logging System.</span>
                </li>
                <li>
                  <kbd>Setup (WIP SYSTEM)</kbd> -{" "}
                  <span className="p-color">Be able to Set Everything up in this Cat.</span>
                </li>
                <li>
                  <kbd>Sticky Messages</kbd> -{" "}
                  <span className="p-color">Set up Sitcky Messages in channels.</span>
                </li>
                <li>
                  <kbd>Ticket</kbd> -{" "}
                  <span className="p-color">Set up tickets for your server.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
            Conext Menu 📕
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Avatar</kbd> -{" "}
                  <span className="p-color">Get the Avatar of a User</span>
                </li>
                <li>
                  <kbd>Thanks</kbd> -{" "}
                  <span className="p-color">Send a thanks to another user</span>
                </li>
                <li>
                  <kbd>Translate</kbd> -{" "}
                  <span className="p-color">Translate something to English</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
            Developer 🧑‍💻
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>eval</kbd> -{" "}
                  <span className="p-color">Evalulate a peice of code</span>
                </li>
                <li>
                  <kbd>Serverlist</kbd> -{" "}
                  <span className="p-color">List of the servers the bot is in</span>
                </li>
                <li>
                  <kbd>Simulation</kbd> -{" "}
                  <span className="p-color">Simulate a boost start or end event for testing purposes</span>
                </li>
                <li>
                  <kbd>Sourcebin</kbd> -{" "}
                  <span className="p-color">Uploads Code To Sourcebin, And Returns A Link!</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Gameplay 🎲
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
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
