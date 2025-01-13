import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/hilink-logo.svg';
import { FOOTER_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full gap-10 md:gap-[10%]">
          {/* Logo */}
          <Link href="/" className="flex justify-center">
            <Image src={logo} alt="logo" width={74} height={29} />
          </Link>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-10 justify-center md:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact Us Section */}
            <div className="flex flex-col gap-5 items-center md:items-start">
              <h4 className="bold-18 whitespace-nowrap">Contact Us</h4>
              <div className="regular-14 flex flex-col gap-4 text-gray-30 text-center md:text-left">
                <p>Email: <a href="hilink@travels.com" className="text-primary">hilink@travels.com</a></p>
                <p>Phone: <a href="tel:+1234567890" className="text-primary">+1 234 567 890</a></p>
                <p>Address: <span className="text-gray-40">Jakarta , Indonasia</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center gap-5">
          <h4 className="bold-18 whitespace-nowrap">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="/">
              <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
            </Link>
            <Link href="/">
              <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
            </Link>
            <Link href="/">
              <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5 items-center md:items-start">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
