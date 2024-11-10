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
                  <kbd>Boost-logs</kbd> -{" "}
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
                  <kbd>GlobalChat</kbd> -{" "}
                  <span className="p-color">Manage Global chat.</span>
                </li>
                <li>
                  <kbd>gstart (Giveaway)</kbd> -{" "}
                  <span className="p-color">Mangage Giveaways.</span>
                </li>
                <li>
                  <kbd>JoinToCreate (VC)</kbd> -{" "}
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
                  <kbd>setup-log (WIP SYSTEM)</kbd> -{" "}
                  <span className="p-color">Set up Logging System.</span>
                </li>
                <li>
                  <kbd>Setup (WIP SYSTEM)</kbd> -{" "}
                  <span className="p-color">Be able to Set Everything up in this Cat.</span>
                </li>
                <li>
                  <kbd>StickyMessages</kbd> -{" "}
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
              Economy 💵
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>Economy</kbd> -{" "}
                  <span className="p-color">Manage your economy with commands.</span>
                </li>
                <li>
                  <kbd>WeedFarm (WIP)</kbd> -{" "}
                  <span className="p-color">Manage your weed farm!</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
            Fun 🎮
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>advancement</kbd> -{" "}
                  <span className="p-color">Generates a Minecraft Advancement</span>
                </li>
                <li>
                  <kbd>anime</kbd> -{" "}
                  <span className="p-color">Get information about an Anime</span>
                </li>
                <li>
                  <kbd>Birthdays</kbd> -{" "}
                  <span className="p-color">Advanced birthday Management with personalized announcements and rewards</span>
                </li>
                <li>
                  <kbd>cleverRate</kbd> -{" "}
                  <span className="p-color">Rate a user on how clever are they</span>
                </li>
                <li>
                  <kbd>facts</kbd> -{" "}
                  <span className="p-color">Get a random Fact</span>
                </li>
                <li>
                  <kbd>games</kbd> -{" "}
                  <span className="p-color">Play various games with your friends in Discord</span>
                </li>
                <li>
                  <kbd>gif</kbd> -{" "}
                  <span className="p-color">Search a Gif</span>
                </li>
                <li>
                  <kbd>hack (FUN ONLY)</kbd> -{" "}
                  <span className="p-color">Hack Somone</span>
                </li>
                <li>
                  <kbd>kill (FUN ONLY)</kbd> -{" "}
                  <span className="p-color">Kill Someone</span>
                </li>
                <li>
                  <kbd>Truthordare</kbd> -{" "}
                  <span className="p-color">Play a fun and exciting game of Truth or Dare!</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
            Information 🎮
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>bot</kbd> -{" "}
                  <span className="p-color">Get Info on the bot</span>
                </li>
                <li>
                  <kbd>help (WIP)</kbd> -{" "}
                  <span className="p-color">Show the help menu for the bot, listing all commands</span>
                </li>
                <li>
                  <kbd>server</kbd> -{" "}
                  <span className="p-color">Shows Server information</span>
                </li>
                <li>
                  <kbd>user</kbd> -{" "}
                  <span className="p-color">Shows User Information</span>
                </li>


              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
            Moderation 🎮
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>ban</kbd> -{" "}
                  <span className="p-color">Ban a user from the server</span>
                </li>
                <li>
                  <kbd>clear</kbd> -{" "}
                  <span className="p-color">Purge messages from a channel</span>
                </li>
                <li>
                  <kbd>clone</kbd> -{" "}
                  <span className="p-color">Clone a channel</span>
                </li>
                <li>
                  <kbd>kick</kbd> -{" "}
                  <span className="p-color">Kick a user from the Server</span>
                </li>
                <li>
                  <kbd>lock</kbd> -{" "}
                  <span className="p-color">Lock down a channel in the server</span>
                </li>
                <li>
                  <kbd>Snipe</kbd> -{" "}
                  <span className="p-color">Retrieve recently deleted messages, images, or all content in the server</span>
                </li>
                <li>
                  <kbd>unban</kbd> -{" "}
                  <span className="p-color">Unban any banned user form the Server</span>
                </li>
                <li>
                  <kbd>unlock</kbd> -{" "}
                  <span className="p-color">Unlock any Locked channel</span>
                </li>
                <li>
                  <kbd>warning</kbd> -{" "}
                  <span className="p-color">Manage user warnings: add, view, edit, or remove.</span>
                </li>


              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
            Utility 🎮
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>calculator</kbd> -{" "}
                  <span className="p-color">Calculator</span>
                </li>
                <li>
                  <kbd>embed</kbd> -{" "}
                  <span className="p-color">Embed any message you setup in a channel</span>
                </li>
                <li>
                  <kbd>imageupload (WIP)</kbd> -{" "}
                  <span className="p-color">Upload an attachment to the CDN repository</span>
                </li>
                <li>
                  <kbd>InviteTracker</kbd> -{" "}
                  <span className="p-color">Track any invites in your server</span>
                </li>
                <li>
                  <kbd>music</kbd> -{" "}
                  <span className="p-color">Be able to play music from the bot in any channel in your Server</span>
                </li>
                <li>
                  <kbd>poll</kbd> -{" "}
                  <span className="p-color">Setup a Poll system for users to Vote</span>
                </li>
                <li>
                  <kbd>reminder</kbd> -{" "}
                  <span className="p-color">Have the bot remind you of something at the end of the countdown</span>
                </li>
                <li>
                  <kbd>say</kbd> -{" "}
                  <span className="p-color">Have the bot say anything you want</span>
                </li>
                <li>
                  <kbd>short</kbd> -{" "}
                  <span className="p-color">Short a long url</span>
                </li>
                <li>
                  <kbd>ss</kbd> -{" "}
                  <span className="p-color">Take a SS of your web</span>
                </li>
                <li>
                  <kbd>timer</kbd> -{" "}
                  <span className="p-color">Set a countdown timer</span>
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
