import moment from "moment";
import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { TbCategory2 } from "react-icons/tb";
import { Axios, baseURL } from "../../../axios/axios";
import { Layout } from "../../../components/layout/layout";
import textTruncate from "../../../lib/truncateText";
import style from "../../../styles/blog/singleblog.module.scss";

export async function getServerSideProps({ query: { slug } }) {
  // Fetch data from external API
  let { data } = await Axios.get(`/blog/single-blog/${slug}`);

  let resposne = await Axios.get(`/blog/related-blogs/${data?._id}`, {
    data: { categories: data?.categories },
  });

  // Pass data to the page via props
  return { props: { blog: data, blogs: resposne?.data } };
}

const Index = ({ blog, blogs }) => {
  return (
    <div className={style.blog__box}>
      <div className="container">
        <div className="grid grid-cols-xl-3 grid-cols-1 gap-5">
          <div className={`${style.signleBlog__grid} col-span-2`}>
            <Image
              src={baseURL + blog?.image}
              alt={blog?.title}
              width={100}
              height={100}
              className={style.blog__image}
            />
            <h1 className={style.blog__title}>{blog?.title}</h1>
            <p className={style.blogCard__extra}>
              <CiCalendar color="black" fontSize={18} fontWeight={700} />{" "}
              <span className={`ms-1 me-5 ${style.date}`}>
                {moment(blog?.createdAt).format("MMMM DD, YYYY")}
              </span>
              <TbCategory2 color="black" fontSize={18} fontWeight={700} />{" "}
              <span className={`ms-1 me-5 ${style.date} text-capitalize`}>
                {blog?.categories?.map(
                  (cat, i) =>
                    `${cat + (i !== blog?.categories.length - 1 ? ", " : "")} `
                )}
              </span>
            </p>
            <div className={style.blog__content}>
              <h4 className={style.blog__description}>{blog?.description}</h4>
              <div
                dangerouslySetInnerHTML={{ __html: blog?.detail }}
                className={style.blog__detail}
              ></div>
            </div>
          </div>
          <div className={style.related__blogs}>
            <h2 className={style.related__blogs__heading}>Related Blogs</h2>
            {blogs?.length > 0 && (
              <div className={style.related__blogs__box}>
                {blogs?.map((text, i) => (
                  <div
                    className={`${style.related__blogs__wrapper} d-flex align-items-center gap-4`}
                  >
                    <Image
                      src={baseURL + text?.image}
                      alt={text?.title}
                      width={100}
                      height={100}
                    />
                    <div className="">
                      <h5 className={style.related__blog__title}>
                        {textTruncate(text?.title, 40)}
                      </h5>
                      <p className={style.date}>
                        <CiCalendar color="black" fontSize={14} />{" "}
                        <span>
                          {moment(blog?.createdAt).format("MMMM DD, YYYY")}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
