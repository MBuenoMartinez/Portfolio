"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import ReadMoreText from "@/components/common/ReadMoreText";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import useIsInViewport from "@/hooks/useIsInViewport";
import educations from "@/data/educations";

const HomeSection2 = ({ current, setCurrent }) => {
  const educationsRef = useRef(null);
  const isInView = useIsInViewport(educationsRef);

  useEffect(() => {
    if (isInView && current !== "educations") setCurrent("educations");

    return () => {
      if (isInView && current === "educations") setCurrent(null);
    };
  }, [isInView, current, setCurrent]);

  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[100vh] items-center justify-center"
      id="educations"
      elementRef={educationsRef}
    >
      <ConstraintedBox classNames="p-4 py-16">
        <h2 className="text-center mx-auto mb-10">
          My <span className="text-[var(--primaryColor)]">Education</span>
        </h2>

        <WrappedBox classes="flex flex-wrap justify-center">
          {educations.map((education, index) => (
            <Column
              key={`education-${index}`}
              classes="bg-[var(--textColor10)] p-4 rounded-[var(--borderRadius)] items-center text-center"
            >
              <Image
                src={education.image}
                alt={`education-${index}`}
                width={100}
                height={100}
                sizes="100%"
                loading="lazy"
                placeholder="blur"
                blurDataURL={education.image}
                style={{
                  width: "5rem",
                  height: "auto",
                  aspectRatio: "1 / 1",
                }}
              />

              <h5
                className="font-bold mt-4"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {education.institution}
              </h5>
              <p>{`${education.startYear}-${education.endYear}`}</p>
              <span className="w-[3rem] h-[0.125rem] bg-[var(--primaryColor)] mx-auto mt-4"></span>
              <p className="mt-4">{education.course}</p>
              <ReadMoreText className="mt-8" visibleTextCount={120}>
                {education.description}
              </ReadMoreText>
            </Column>
          ))}
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
