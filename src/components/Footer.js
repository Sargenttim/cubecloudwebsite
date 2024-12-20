import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  CubeCloud
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Bot is online!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/commands">
                  Commands
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.gg/m4RBuRUuhB">
                  Support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.gg/m4RBuRUuhB">
                  Discord-Server
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Created with ❤️ by{" "}
              <Link
                href="https://discord.gg/m4RBuRUuhB"
                className="h-color no-decoration"
              >
                Timmy
              </Link>
            </p>
            <p className="p-color">2023 All rights reserved!</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color"
                href="https://github.com/Sargenttim/CCtos-pp/blob/main/Privacy%20Policy"
                target="_blank"
                >
              Privacy Policy
            </Link>
            <div className="footer-sec2-link">
            <Link className="p-color"
                href="https://github.com/Sargenttim/CCtos-pp/blob/main/Terms%20of%20Service"
                target="_blank"
                >
              Terms of Service
            </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
