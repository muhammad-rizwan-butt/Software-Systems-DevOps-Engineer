import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Axios } from "../../axios/axios";
import { Layout } from "../../components/layout/layout";
import { BlogCard } from "../../components/ui/cards/blogs/BlogCard";
import { images } from "../../lib/images";
import style from "../../styles/blog/blog.module.scss";

const Index = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    Axios.get(`/blog/all-blogs?page=${0}&pageSize=${10}`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={style.blog__wrapper}>
      <div className="container-sm">
        <div className="py-3">
          <Image src={images["blog__bg.png"]} alt="" className="w-100" />
        </div>
        <div className="py-5">
          <h2
            className={`text-uppercase mt-5 text-center ${style.latestBlog__text}`}
          >
            Latest from the Blog
          </h2>
          <div className="grid grid-cols-xl-4 grid-cols-lg-3 grid-cols-md-2 grid-cols-1 gap-3 mt-5 ">
            {blogs?.map((blog, index) => (
              <BlogCard blog={blog} key={blog?.title + index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
