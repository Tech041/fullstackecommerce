import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  // STATE FOR STORING IMAGES FOR UPLOAD
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  // state for the products
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div className="">
        <p className="mb-2">Upload Image</p>
        <div className=" flex gap-2">
          <label htmlFor="image1" className="">
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
              className=" w-20"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              className=""
              hidden
            />
          </label>
          <label htmlFor="image2" className="">
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
              className=" w-20"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              className=""
              hidden
            />
          </label>
          <label htmlFor="image3" className="">
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
              className=" w-20"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              className=""
              hidden
            />
          </label>
          <label htmlFor="image4" className="">
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
              className=" w-20"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              className=""
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Type here ..."
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write content here..."
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div className="">
          <p
            className="
          mb-2"
          >
            Product Category
          </p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className=" w-full px-3 py-2"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div className="">
          <p
            className="
          mb-2"
          >
            Product Subcategory
          </p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className=" w-full px-3 py-2"
          >
            <option value="Multivitamin">Multivitamin</option>
            <option value="Beauty">Beauty</option>
            <option value="Heart/Brain">Heart/Brain</option>
          </select>
        </div>
        <div className="">
          <p className="mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            className="w-full px-3 py-2 sm:w-[120px]"
            placeholder="25"
          />
        </div>
      </div>
      <div className="">
        <p className="mb-2">Product Sizes</p>
        <div className="flex flex-wrap gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("X30tabs")
                  ? prev.filter((item) => item !== "X30tabs")
                  : [...prev, "X30tabs"]
              )
            }
            className=""
          >
            <p
              className={` ${
                sizes.includes("X30tabs") ? "bg-pink-100" : "bg-slate-200"
              }  px-3 py-1 cursor-pointer`}
            >
              X30tabs
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("X60tabs")
                  ? prev.filter((item) => item !== "X60tabs")
                  : [...prev, "X60tabs"]
              )
            }
            className=""
          >
            <p
              className={`  ${
                sizes.includes("X60tabs") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              X60tabs
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("X90tabs")
                  ? prev.filter((item) => item !== "X90tabs")
                  : [...prev, "X90tabs"]
              )
            }
            className=""
          >
            <p
              className={`  ${
                sizes.includes("X90tabs") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              X90tabs
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("X100ml")
                  ? prev.filter((item) => item !== "X100ml")
                  : [...prev, "X100ml"]
              )
            }
            className=""
          >
            <p
              className={`  ${
                sizes.includes("X100ml") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              X100ml
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("X150ml")
                  ? prev.filter((item) => item !== "X150ml")
                  : [...prev, "X150ml"]
              )
            }
            className=""
          >
            <p
              className={`  ${
                sizes.includes("X150ml") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              X150ml
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("X200ml")
                  ? prev.filter((item) => item !== "X200ml")
                  : [...prev, "X200ml"]
              )
            }
            className=""
          >
            <p
              className={`  ${
                sizes.includes("X200ml") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              X200ml
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("X300ml")
                  ? prev.filter((item) => item !== "X300ml")
                  : [...prev, "X300ml"]
              )
            }
            className=""
          >
            <p
              className={`  ${
                sizes.includes("X300ml") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              X300ml
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("X1L")
                  ? prev.filter((item) => item !== "X1L")
                  : [...prev, "X1L"]
              )
            }
            className=""
          >
            <p
              className={`  ${
                sizes.includes("X1L") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              X1L
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          className=""
          id="bestseller"
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to bestseller
        </label>
      </div>
      <div className="flex w-full justify-center md:justify-start">
        <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
          ADD
        </button>
      </div>{" "}
    </form>
  );
};

export default Add;
