import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import newAxios from "../utils/axiosRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Message = () => {
  const { user: currentUser } = useAuth();
  const [text, setText] = useState("");

  const { id } = useParams();

  const queryClient = useQueryClient();

  const fetchMessages = () => {
    const theData = newAxios
      .get(`/messages/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));
    return theData;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
  });


  const {
    mutate,
    isLoading: sendLoad,
    error: sendError,
  } = useMutation({
    mutationFn: (message) => newAxios.post(`/messages`, message),
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const otherId = id?.replace(currentUser?._id, "") ;


  const fetchUser = () => {
    const theData = newAxios
      .get(`/users/${otherId}`)
      .then((res) => res.data)
      .catch((err) => console.log(err.response.data));
    return theData;
  };

  const {
 
    data: theUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    enabled: !!(otherId&&currentUser?._id),
  });


  const handleSubmit = (e) => {
    e.preventDefault();
  
    mutate({
      conversationId: id,
      desc: text,
    });
    setText("");
  };

  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto ">
        <div className="py-10 uppercase text-gray-500">
          <Link to={"/messages"}>Messages</Link>
          {">"}John Doe
        </div>
        <div className="h-[300px] overflow-y-scroll  myScrollTwo overfx p-4  shadow-sm shadow-gray-400">
          {isLoading
            ? "Loading..."
            : error
            ? "Something went wrong"
            : data?.map((el, i) =>
                el.userId !== currentUser?._id ? (
                  <div key={el._id} className="flex gap-3  w-full my-4">
                    {theUser && <img
                      src={ theUser?.img}
                      className="w-8 h-8 rounded-full object-contain"
                      alt="profile"
                    />}
                    <p className="p-3 border rouded-lg max-w-[600px] bg-gray-300 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
                      {el.desc}
                    </p>
                  </div>
                ) : (
                  <div
                    key={el._id}
                    className="flex gap-3 my-4 w-full justify-end"
                  >
                    <p className="p-3 border rouded-lg max-w-[600px] text-white bg-blue-500 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl ">
                      {el.desc}
                    </p>
                    <img
                      src={currentUser.img}
                      className="w-8 h-8 rounded-full object-contain"
                      alt="profile"
                    />
                  </div>
                )
              )}
          {data?.length === 0 && "no messages"}
        </div>
        <form onSubmit={handleSubmit} className="p-10 flex gap-4 items-center">
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="input resize-none h-[100px]  flex-1"
            placeholder="write a message"
          />
          <button
            disabled={!text || sendLoad}
            className="bg-green-400 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
          >
            Send
          </button>
        </form>
        {sendError && (
          <p className="text-red-400 text-sm py-5">{sendError.response.data}</p>
        )}
      </div>
    </div>
  );
};

export default Message;
