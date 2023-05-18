import React, { useReducer, useState } from "react";
import { INITIAL_STATE, gigReducer } from "../reducers/gigReducer";
import axios from "axios";
import newAxios from "../utils/axiosRequest";
import { useNavigate } from "react-router-dom";

const upload = async (file) => {
  if (!file) {
    return "";
  }
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/drhzjli1l/image/upload",
      data
    );
    const { url } = res.data;
   
    return url;
  } catch (err) {
    console.log(err);
  }
};

const Add = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cover, setCover] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
  
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    if (e.target[0].value.trim()) {
      dispatch({ type: "ADD_FEATURES", payload: e.target[0].value });
      e.target[0].value = "";
    }
  };

  const handleUpload = async () => {
    setUploading(true);

    try {
      const theCover = await upload(cover);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      dispatch({ type: "ADD_IMAGES", payload: { cover: theCover, images } });
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setError("");
    setLoading(true);
    try {
      await newAxios.post("/gigs", state);
      navigate("/mygigs");
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto p-4">
        <h1 className="text-gray-400 text-3xl py-8">Add New Gig</h1>

        <div className="flex gap-2 flex-wrap">
          <section className="min-w-[350px] flex-1  p-3 flex flex-col gap-4">
            <label htmlFor="title" className="text-gray-500">
              Title
            </label>
            <input
              className="input"
              type="text"
              id="title"
              name="title"
              placeholder="e.g. I will do some thing I am really good at"
              onChange={handleChange}
            />
            <label htmlFor="cats" className="text-gray-500 mt-8">
              Category
            </label>
            <select
              id="cats"
              name="cat"
              className="input cursor-pointer"
              onChange={handleChange}
            >
              <option value={"design"}>Design</option>
              <option value={"web"}>Web Development</option>
              <option value={"animation"}>Animation</option>
              <option value={"music"}>Music</option>
              <option value={"content"}>Content</option>
              <option value={"teaching"}>Teaching</option>
              <option value={"training"}>Training</option>
              <option value={"marketing"}>Marketing</option>
            </select>
            <div className="flex flex-col gap-4">
              <label className="text-gray-500">Cover Image</label>
              <input
                type="file"
                className="input"
                onChange={(e) => setCover(e.target.files[0])}
              />
              <label className="text-gray-500">Upload Images</label>
              <input
                type="file"
                className="input"
                multiple
                onChange={(e) => setFiles(e.target.files)}
              />
              <button
                onClick={handleUpload}
                type="button"
                disabled={uploading || !cover }
                className="bg-green-400 py-2 text-white disabled:bg-gray-500"
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>

            <label className="text-gray-500">Description</label>
            <textarea
              onChange={handleChange}
              name="desc"
              placeholder="Brief description to introduce your sevices to customers"
              rows={16}
              cols={30}
              className="resize-none input"
            ></textarea>
            <button
              disabled={
                loading ||
                !state.title ||
                !state.cat ||
                !state.desc ||
                !state.cover ||
                !state.price ||
                !state.shortTitle ||
                !state.shortDesc ||
                !state.deliveryTime ||
                !state.revesionNumber
              }
              onClick={handleSubmit}
              className="py-3 text-white font-semibold bg-green-400 rounded-sm disabled:bg-gray-500"
            >
              {loading ? 'Loading...' :  "Create"}
            </button>
            {error && <p className="text-red-400 text-s, py-5">{error}</p>}
          </section>

          <section className="min-w-[350px] flex-1  p-3 flex flex-col gap-4">
            <label className="text-gray-500">Service Title</label>
            <input
              onChange={handleChange}
              name="shortTitle"
              className="input"
              type="text"
              placeholder="e.g. one-page web design"
            />
            <label className="text-gray-500">Short Description</label>
            <textarea
              onChange={handleChange}
              name="shortDesc"
              placeholder="Short description of your service"
              className="resize-none input"
            ></textarea>
            <label className="text-gray-500">Delivery Time(e.g. 3 days)</label>
            <input
              onChange={handleChange}
              name="deliveryTime"
              className="input"
              type="number"
              min={1}
            />
            <label className="text-gray-500">Revision Number</label>
            <input
              onChange={handleChange}
              name="revesionNumber"
              className="input"
              type="number"
              min={1}
            />
            <label className="text-gray-500">Add Features</label>
            <form onSubmit={handleFeature} className="w-full flex gap-1 ">
              <input
                className="input flex-1"
                type="text"
                placeholder="e.g. page design"
              />
              <button
                type="submit"
                className="px-8 rounded-sm py-2 bg-green-400 text-white"
              >
                Add
              </button>
            </form>
            <div className="flex flex-wrap items-center gap-3">
              {state?.features?.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-shrink-0 gap-2 items-center px-3 py-1 rounded-full bg-gray-100 border w-fit"
                >
                  <span className="text-gray-700">{feature}</span>{" "}
                  <span
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: feature })
                    }
                    className="rounded-full flex items-center hover:bg-gray-700 duration-300 cursor-pointer justify-center w-5 h-5 text-xs bg-gray-400 text-white "
                  >
                    X
                  </span>
                </div>
              ))}{" "}
            </div>

            <label className="text-gray-500">Price</label>
            <input
              onChange={handleChange}
              name="price"
              className="input"
              type="number"
              min={1}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Add;
