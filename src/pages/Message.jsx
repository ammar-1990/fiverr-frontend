import React from "react";
import { Link } from "react-router-dom";
import { fakeChat } from "../fakeData";

const Message = () => {
  const currentUser = {
    id: "12",
    name: "ammar",
    isSeller: true,
  };
  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto ">
        <div className="py-10 uppercase text-gray-500">
          <Link to={"/messages"}>Messages</Link>
          {">"}John Doe
        </div>
        <div className="h-[300px] overflow-y-scroll  myScrollTwo overfx p-4  shadow-sm shadow-gray-400">
          {fakeChat.map((el, i) =>
            el.username !== currentUser.name ? (
              <div key={i} className="flex gap-3  w-full my-4">
                <img
                  src={el.img}
                  className="w-8 h-8 rounded-full object-cover"
                  alt="profile"
                />
                <p className="p-3 border rouded-lg max-w-[600px] bg-gray-300 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">{el.message}</p>
              </div>
            ) : (
              <div key={i} className="flex gap-3 my-4 w-full justify-end">
                
                <p className="p-3 border rouded-lg max-w-[600px] text-white bg-blue-500 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl ">{el.message}</p>
                <img
                  src={el.img}
                  className="w-8 h-8 rounded-full object-cover"
                  alt="profile"
                />
              </div>
            )
          )}
        </div>
        <form className="p-10 flex gap-4 items-center">
          <textarea className="outline-none p-2 h-[100px] resize-none border rounded-lg flex-1" placeholder="write a message"/>
          <button className="bg-green-400 text-white px-4 py-2 rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
