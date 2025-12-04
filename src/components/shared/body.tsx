/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { Bowlby_One, Indie_Flower } from "next/font/google";
import Link from "next/link";

const bowlby = Bowlby_One({ weight: "400", subsets: ["latin"] });
const indie = Indie_Flower({ weight: "400", subsets: ["latin"] });

const Body = () => {
  return (
    <div className="">
      <div className="p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:basis-1/2 flex justify-center">
          <Image
            src={"/soec_3.jpg"}
            alt=""
            width={600}
            height={600}
            className="mx-auto rounded-md"
          />
        </div>
        <p className="basis-1/2 space-y-4">
          {/* <span
            className={`${indie.className} block text-center lg:text-left text-3xl md:text-4xl`}
          >
            "From Hashtags to Action: Gen Z's Blueprint for a Better Nigeria"{" "}
          </span> */}
          <span className="block md:text-xl text-justify">
            The Love in Action Foundation is committed to empowering the less privileged and spreading the love of Jesus through practical acts of compassion. Through healthcare initiatives, educational scholarships, and welfare outreaches, the Foundation works to uplift communities and equip young people with the tools to thrive.
            <br />
            <br />
            The Foundation continues its inspiring national essay competition, “From Hashtags to Action: Gen Z’s Blueprint for a Better Nigeria.” For 2025, the theme “Towards a Safer Nigeria and the Fight Against Insecurity” challenges young Nigerians to transform their ideas into practical solutions that can help rebuild peace and enhance national security.
            <br />
            <br />
            Our goal is to nurture a generation of young Nigerians who demonstrate independent thought, critical analysis, and a passion for meaningful change. This competition challenges students not only to highlight the key issues driving insecurity, but also to offer creative strategies that can strengthen Nigeria’s future and contribute to a safer society for all.
            {/* <span className="font-black">
              Essay themes can center on creative approaches to addressing youth
              unemployment in Nigeria, including vocational skills training,
              digital education, entrepreneurial development, and broader
              economic opportunities
            </span> */}
          </span>
          <Link
            href={"https://forms.gle/yrUuCnoCYNwr26pF6"}
            target="_blank"
            className="block py-4 px-4 bg-primary text-light text-center font-semibold rounded-xl duration-150 border border-primary hover:bg-light hover:text-primary"
          >
            Apply
          </Link>
        </p>
      </div>

      <div className="p-10 md:p-14 lg:p-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 bg-light">
        {/* <div className="p-0 lg:p-10 bgwhite rounded-md">
          <Image
            src={"/theme_3.png"}
            alt=""
            width={460}
            height={230}
            className=""
          />
        </div> */}
        <div className="basis1/2 text-center">
          <p
            className={`${bowlby.className} mb-4 text-2xl md:text-3xl tracking-wider`}
          >
            Theme for 2025
          </p>
          <div className="space-y-4">
            <p className="font-semibold md:text-2xl">
              Towards a Safer Nigeria and the Fight Against Insecurity.
            </p>
            <p className="md:text-2xl textjustify">
              Participants will explore Nigeria’s growing security challenges and propose practical, youth-driven solutions for building a safer and more stable nation. Essays may examine the roots of insecurity and highlight innovative approaches such as community engagement, technology-driven safety initiatives, policy reforms, peacebuilding efforts, and strategies that empower young people to play an active role in restoring national security.
            </p>
          </div>
        </div>
      </div>

      <div className="p-10 md:p-14 lg:p-20 bg-accent">
        <p
          className={`${bowlby.className} mb-4 text-2xl md:text-3xl text-light tracking-wider`}
        >
          Eligibility
        </p>
        <p className="textxl md:text-3xl text-light text-justify">
          Open to all Nigerian students currently enrolled in government owned
          universities and polytechnics at Undergraduate level across different
          faculties and departments. Essays can be submitted by students at any
          level.{" "}
        </p>
      </div>

      <div className="relative bg-[url('/prize_1.jpg')] bg-cover bg-center">
        <div className="p-10 md:p-14 lg:p-28 space-y-10 bg-black/[.90] bg-contain bg-no-repeat bg-center text-light text-center">
          <p
            className={`${bowlby.className} text-3xl md:text-4xl lg:text-5xl text- tracking-wider`}
          >
            Prize to be won
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl tracking-wider">
            Full Undergraduate Tuition Scholarship till completion
          </p>
          {/* <Link
            href={"https://forms.gle/yrUuCnoCYNwr26pF6"}
            target="_blank"
            className="block w-full max-w-[600px] my-4 mx-auto py-4 px-4 bg-primary text-light text-center font-semibold rounded-xl duration-150 border border-primary hover:bg-light hover:text-primary"
          >
            Apply
          </Link> */}
        </div>
      </div>

      <div className="p-10 md:p-14 lg:p-20 bg-touch text-light">
        <p
          className={`${bowlby.className} mb-4 text-2xl md:text-3xl tracking-wider`}
        >
          Requirements for submission
        </p>
        <ul className="p-5 list-disc lg:list-inside md:text-2xl space-y-2">
          <li>Essays should be composed in English.</li>
          <li>Word limit: 1500 words.</li>
          {/* <li>Essay timeline: September 2nd to October 2nd.</li> */}
          <li>Submission deadline: December 26th 2025.</li>
          {/* <li>
            Submission portal: An online platform (e.g., Google Forms) will be
            established for essay submissions.
          </li> */}
        </ul>
      </div>

      <div className="p-10 md:p-14 lg:p-20 bg-light">
        <p
          className={`${bowlby.className} mb-4 text-2xl md:text-3xl tracking-wider`}
        >
          Rules and guidelines
        </p>
        <ul className="p-5 list-disc lg:list-inside md:text-2xl space-y-2">
          <li>
            The submission of essays is open to individuals currently enrolled
            in a Public Nigerian University or Polytechnic.
          </li>
          <li>
            Essays limited to 1500 words, must be typewritten with the author's
            name, email address, phone number, author's university's name, and
            essay title at the top of the first page.
          </li>
          <li>
            {/* No specific formatting rules (font style, size, line space, etc.)
            are prescribed. However, essays must be submitted in PDF format.
             */}
            All essays must be typed in Times New Roman, font size 12, with 1.5
            line spacing. The body of the essay should be fully justified.
          </li>
          <li>
            The word count limit does not include the author's name, email
            address, phone number, author's university's name, and essay title.
          </li>
          <li>Submissions must be original and unpublished.</li>
          <li>
            Entries incorporating plagiarised content or generated by generative
            AI (such as ChatGPT) will be disqualified.
          </li>
          <li>
            Each essay submission must be the work of a single author, and
            co-authored submissions will not be accepted.
          </li>
          <li>
            By submitting an essay, the author grants the organiser permission
            to publish in any medium while retaining ownership of the essay.
          </li>
        </ul>
        <Link
          href={"https://forms.gle/yrUuCnoCYNwr26pF6"}
          target="_blank"
          className="block w-full max-w-[600px] my-4 mx-auto py-4 px-4 bg-primary text-light text-center font-semibold rounded-xl duration-150 border border-primary hover:bg-primary/95"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default Body;
