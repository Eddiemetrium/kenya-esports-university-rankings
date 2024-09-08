import { Heading, Img } from "../../components";
import UserProfile4 from "../../components/UserProfile4";
import React, { Suspense } from "react";

const data = [
  { userName: "STEPHAN CHRIS", userTitle: "CEO/Founder" },
  { userName: "ANNE HUSLER", userTitle: "Design Director" },
  { userName: "MAHMED ENN", userTitle: "Frontend Developer" },
  { userName: "ALEXANDER", userTitle: "Frontend Developer" },
  { userName: "GEORGI NOZ", userTitle: "Backend Developer" },
  { userName: "SARAH QUIN", userTitle: "3D Modeler" },
];

export default function DeveloperspageTeams() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-black-900_e5 py-[6.25rem] md:py-[1.25rem]">
        <div className="container-xs flex flex-col gap-[5.00rem] md:gap-[3.75rem] md:px-[1.25rem] sm:gap-[2.50rem]">
          <div className="flex items-center gap-[1.88rem] sm:flex-col">
            <Img
              src="img_overflow_menu_indigo_a200.svg"
              width={30}
              height={30}
              alt="Overflow menu"
              className="h-[1.88rem] w-[1.88rem] sm:w-full"
            />
            <Heading as="h2" className="uppercase tracking-[0.06rem]">
              Meet Our Teams
            </Heading>
          </div>
          <div className="grid grid-cols-3 justify-center gap-[2.75rem] md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile4
                  {...d}
                  key={"gridstephanchri" + index}
                  className="bg-gray-400"
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
