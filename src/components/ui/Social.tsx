import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/ezirra",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/ezira-yallew",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/ezira_yallew/",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/ezira_yallew",
  },
  {
    icon: <FaTelegram />,
    url: "https://t.me/eza_na_wi",
  },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, url }) => (
        <Link href={url} key={url} className={iconStyles}>
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
