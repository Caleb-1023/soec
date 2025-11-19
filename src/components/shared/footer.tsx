import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo_lia.png";

const Footer = () => {
  return (
    <div className="relative p-10 md:p-16 lg:p-20 bg-primary text-light">
      <div className="lg:absolute top-1/2 left-1/2 py-10 lg:-translate-y-1/2 lg:-translate-x-1/2">
        <Image src={logo} alt="" className="w-80 mx-auto" />
      </div>
      <div className="space-y-4">
        <p className="text-xl">Connect with us:</p>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="basis-1/3">
            <p className="mb-2">Love In Action Foundation</p>
            <Link
              target="_blank"
              href={"https://www.instagram.com/loveinactionglobal/"}
            >
              <Instagram />
            </Link>
          </div>
          <div className="basis-1/3 flex flex-col items-start md:items-end">
            <p className="mb-2">Pastor Steve Ogah</p>
            <ul className="flex items-center justify-start gap-4">
              <li>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/officialsteveogah/"}
                >
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={
                    "https://www.facebook.com/profile.php?id=100063769477775&mibextid=LQQJ4d"
                  }
                >
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://www.youtube.com/@Officialsteveogah"}
                >
                  <Youtube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
