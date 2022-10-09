import React from 'react';

const Member = ({member}) => {
        const {name,picture,description} = member;
    return (
        <div>
            <div
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 rounded-xl"
            >
              <img
                className="object-cover w-full rounded h-44 dark:bg-gray-500" src={picture}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {name}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 21, 2021
                </span>
                <p>
                  {description}
                </p>
              </div>
            </div>
        </div>
    );
};

export default Member;