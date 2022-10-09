import React from "react";
import { Link } from "react-router-dom";

const Blog1 = () => {
  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-300 dark:text-black">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-red-600">Our Classes</h2>
            <p className="font-serif text-sm text-black">
              Cras feslin is hendrerit vel nibh vitae ornar uspendisse consequat
              quis sem velit aliquam vibh <br /> vitae ornar uspendisse consequat quis
              sem ieserliv velit aliquam <br /> iserflei noer sitae ornar uspendisse
              consequat quis sem aluam joiseirn voiservs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-white rounded-xl">
              <Link
                rel="noopener noreferrer"
                to="#"
                
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://img.freepik.com/free-vector/school-kids-classroom-scene_1308-73687.jpg?w=740&t=st=1665310843~exp=1665311443~hmac=3fdf1461b68b1506f6313e7fe7646610ca67f875c038f3d0abd3eb7e5adc1375"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="#"
                  
                ></Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                kids in the classroom
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 1, 2020</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-white rounded-xl">
              <Link
                rel="noopener noreferrer"
                to="#"
                
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://img.freepik.com/free-vector/teacher-students-wearing-face-mask-class_52683-47542.jpg?w=740&t=st=1665310975~exp=1665311575~hmac=a865150a433120bb779bd0ba64a6468bc342491de3e5ef8cb01eeff661a79b40"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="#"
                  
                ></Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Teacher and students wearing face mask in class
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>December 2, 2020</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-white rounded-xl">
              <Link
                rel="noopener noreferrer"
                to="#"
                
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://img.freepik.com/free-vector/teacher-talking-with-her-students-white-background_1308-69937.jpg?w=900&t=st=1665311029~exp=1665311629~hmac=0e52cd07bb3d8fb2ba99e6446e99f3e1830a71069c6acdc633075822e740aee8"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="#"
                  
                ></Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Teacher talking with her students
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>May 3, 2020</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-white rounded-xl">
              <Link
                rel="noopener noreferrer"
                to="#"
                
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://img.freepik.com/free-vector/teacher-student-learn-chemistry-classroom_107791-14435.jpg?w=740&t=st=1665311089~exp=1665311689~hmac=313d78044ed48616ccc58f70b0c4378d918a153b44d8ce96d577f0221efd397b"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="#"
                  
                ></Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Teacher and student learn chemistry in classroom
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>June 4, 2020</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog1;
