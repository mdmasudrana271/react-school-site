import React from "react";
import { useLoaderData } from "react-router-dom";
import Member from "../Member/Member";

const Team = () => {
    const members = useLoaderData()
  return (
    <div className="bg-blue-400">
      <div>
        <h1 className="text-6xl text-white font-bold pt-10">Meet Our Team</h1>
        <p className="pt-10 text-white font-semibold">
          Cras feslin is hendrerit vel nibh vitae ornar uspendisse consequat
          quis sem velit aliquam <br />
          vibh vitae ornar uspendisse consequat quis sem ieserliv velit aliquam
          iserflei noer <br />
          sitae ornar uspendisse consequat quis sem aluam joiseirn voiservs.
        </p>
      </div>
      <section className="dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="grid grid-cols-3 gap-5">
                {
                    members.map(member=> <Member key={member.id} member={member}></Member>)
                }
            </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
