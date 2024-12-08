import React, { useEffect } from "react";
import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup
} from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <FlowbiteFooter container className="mt-5" data-aos="fade-up">
      <FooterCopyright by="CV-OLK" year={2024} />
      <FooterLinkGroup>
        <FooterLink href="https://flowbite-react.com">Template</FooterLink>
        <FooterLink href="mailto:berrzert9@gmail.com?subject=Message Me">
          Email
        </FooterLink>
        <FooterLink href="https://github.com/Ayyas-RF">GitHub</FooterLink>
        <FooterLink href="https://t.me/vikxl_lated">Telegram</FooterLink>
      </FooterLinkGroup>
    </FlowbiteFooter>
  );
};

export default Footer;
