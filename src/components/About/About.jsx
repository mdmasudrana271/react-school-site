import React from "react";
import { Link } from "react-router-dom";
import ParentT from "../ParentT/ParentT";

const About = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-6xl my-10 font-bold text-indigo-400 ">WHO WE ARE</h1>
      </div>
      <div className="flex w-3/4 mx-auto my-6 gap-5">
        <div className="w-2/4">
          <img
            className="rounded-xl"
            src="https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg?w=740&t=st=1665318046~exp=1665318646~hmac=5e94ecea23376a02f6144d056a8597dc70cb49d5fe518c32af58bff8caa6435a"
            alt=""
          />
        </div>
        <div className="align-start text-2xl">
          <p>
            <span className="font-bold">Laoreet dolore magna</span> aliquam erat
            are esrseiiqetuer ipisci nibh euismod is <br />
            tincidunt ut amat volutpat.Ut wisi enim ad minim ipiscing elit, sed
            diam <br />
            nonummy nibh euismod is tincidunt utilin malins noineq laore.
          </p>
        </div>
      </div>

      <div className="my-10">
        <ParentT></ParentT>
      </div>
    </div>
  );
};

export default About;
