import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      
      <div className="container mx-auto">
        {/* Text & Illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text  */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Lets's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
            I’m always open to new opportunities and collaborations. Contact me via email, phone, or social media. I look forward to hearing from you soon. 😊
            </p>
          </div>
          {/* illustration  */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form  */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text  */}
          <div className="flex flex-col gap-y-8 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail  */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div><a href="mailto:gurjot.singh.aulakh28@gmail.com">gurjot.singh.aulakh28@gmail.com</a></div>
            </div>
            {/* address  */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>
                <a href="https://www.google.com/maps/search/?api=1&query=Lianstubben+10,+3414+Lier,+Norway" target="_blank" rel="noopener noreferrer">
                  Lianstubben 10, 3414 Lier, Norway
                </a>
              </div>
            </div>
            {/* phone  */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div><a href="tel:+4797387540">+47 973 87 540</a></div>
            </div>
          </div>
          <Form />
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
