import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user?.uid && (
        <div className="flex justify-between items-center px-20 py-4 shadow">
          <div>
            <p className="italic font-semibold md:ml-20 hidden md:block">
              Hello
              <span className="font-bold text-yellow-500 text-xl">
                {" "}
                {user?.displayName?.toUpperCase()}
              </span>{" "}
              !! Welcome to Learning Bee . Wish you Happy Learning !
            </p>
          </div>
          <div className="flex items-center ml-32 md:ml-0">
            <p className="font-bold mr-2">{user?.email}</p>
            <Link to="/user">
              {user?.photoURL ? (
                <div
                  className=" tooltip tooltip-bottom z-20"
                  data-tip={user?.displayName}
                >
                  <div className="avatar online ">
                    <div className="w-12 rounded-full">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="tooltip tooltip-bottom z-20"
                  data-tip={user?.displayName}
                >
                  <button className="p-2 rounded-full border-black border">
                    <FaUser className="text-xl" />
                  </button>
                </div>
              )}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserNav;
