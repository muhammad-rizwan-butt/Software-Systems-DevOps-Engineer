import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCategory2 } from "react-icons/tb";
import { baseURL } from "../../../../axios/axios";
import textTruncate from "../../../../lib/truncateText";
import style from "../../../../styles/ui/cards/blogcard.module.scss";

export const BlogCard = ({ blog }) => {
  return (
    <div className={style.blog__Card__box}>
      <div className={style.blog__Card__Img}>
        <Image
          src={baseURL + blog?.image}
          alt=""
          width={100}
          height={260}
          className="w-100"
        />
      </div>
      <div className={style.blogCard__content}>
        <h3 className={style.blogCard__heading}>{blog?.title}</h3>
        <TbCategory2 color="black" fontSize={12} className="me-2" />
        {blog?.categories?.map((category, index) => (
          <span
            key={category + index}
            className={`text-capitalize ${style.blogCard__category}`}
          >
            {category + (index !== blog?.categories.length - 1 ? ", " : "")}
          </span>
        ))}
        <p className={style.blogCard__text}>
          {textTruncate(blog?.description, 100)}{" "}
          <span className={style.blogCard__link}>
            <Link href={`/blog/${blog?.slug}`}>Read More</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
