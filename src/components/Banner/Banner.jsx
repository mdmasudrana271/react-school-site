import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <img
          className="w-full"
          src="https://img.freepik.com/free-photo/classmates-friends-bag-school-education_53876-137717.jpg?w=740&t=st=1665308383~exp=1665308983~hmac=d1418b822e9937f4192934d6c1407716091203606d9f19d8dbb3d4a57aa7ed72"
          alt=""
        />
      </div>
      <div className="flex justify-between m-10 gap-5 align-middle pt-10">
        <div className=" w-3/4">
          <h1 className="text-6xl p-14 text-orange-400">
            Welcome to <span className="text-purple-400">KidsWorld</span>
          </h1>

          <p>
            Fusce pretium, est at aliquam semper, leo ante facilisis risus in
            feugiat ipsum augue pellent esque metu at luctus metus, non ornare
            lectus ac ipsum convallis fermentum ante a suscipit nunc. Etiam non
            scelerisque loren ornare dapibus libero sit amet facil sodales
            rutrum.
          </p>
          <p>
            <small>
              Donec tristique pellentesque duinon malesuada mi cursus nec amet
              quam justo
            </small>
          </p>
          <p>
            <small>
              {" "}
              Ultricies ipsum dolor sit amet lisis massa velisectetur adipiscing
              elit oiels
            </small>
          </p>
          <p>
            <small>
              {" "}
              Pellentesque fermentum sed sem nec port rutrum semper sed orem
              ipsum dolor sit
            </small>
          </p>
          <button className="bg-orange-400 py-2 px-5 font-bold mt-5 rounded">
            Read more
          </button>
        </div>
        <div>
          <img
            className="w-full rounded"
            src="https://img.freepik.com/free-photo/happy-kids-elementary-school_53876-138141.jpg?w=740&t=st=1665307918~exp=1665308518~hmac=328b6886f6cd18c2ff66eade626b873def266abcc1c185d1e0e622d51050930b"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
