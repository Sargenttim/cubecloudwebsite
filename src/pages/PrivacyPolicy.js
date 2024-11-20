import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use this bot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Commands</h4>
              <p className="p-color">
                We have more than 50 commands support in this bot.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ 24/7 Support</h4>
              <p className="p-color">
                The biggest support community server for the bot available for
                you anytime.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏️ Customization</h4>
              <p className="p-color">
                Fully customizable discord bot completely FREE!
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <div className="about-header">
          <h3 className="h-color">Updates</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Bot Updates</h4>
              <p className="p-color">
                Lasted Updates:
                Updated Leveling added new photos
                Added in Anti System
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ Discord Updates</h4>
              <p className="p-color">
                Updated Global Chat system, added new badges for CubeCloud Members and Staff team, Join today to get new roles.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="https://discord.gg/m4RBuRUuhB" className="h-color no-decoration">
            Join The Server &rarr;
          </Link>
        </p>


        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">60+</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">90K+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">50+</h4>
            <p className="p-color">Total Commands</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default PrivacyPolicy;
