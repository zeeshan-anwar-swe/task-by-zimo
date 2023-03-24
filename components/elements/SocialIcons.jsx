import { Stack, Link } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function SocialIcons({ ...rest }) {
  return (
    <Stack className="social-icons" {...rest}>
      <Link
        className="icon"
        href="https://www.linkedin.com/in/zeeshan-anwar-swe/"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: "blue.400" }}
      >
        <AiFillLinkedin />
      </Link>
      <Link
        className="icon"
        target="_blank"
        href="https://github.com/zeeshan-anwar-swe"
        rel="noopener noreferrer"
        _hover={{ color: "black" }}
      >
        <AiFillGithub />
      </Link>
      <Link
        className="icon"
        href="mailto:zeeshan.anwar.swe@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: "red.400" }}
      >
        <AiFillMail />
      </Link>
      <Link
        className="icon"
        href="https://wa.me/+923063917029"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: "green.400" }}
      >
        <AiOutlineWhatsApp />
      </Link>
    </Stack>
  );
}
export default SocialIcons;
