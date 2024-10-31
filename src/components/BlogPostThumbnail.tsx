import Image from "next/image";
import Link from "next/link";

export interface IBlogPostThumbnailParams {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const BlogPostThumbnail = ({
  image,
  title,
  description,
  date,
  link,
}: IBlogPostThumbnailParams) => {
  return (
    <Link
      href={link}
      className="block max-w-sm overflow-hidden rounded bg-white shadow-lg transition-shadow duration-200 hover:shadow-2xl"
    >
      <div className="relative h-[300px] w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">{title}</h2>
        <div className="mb-4 text-base text-gray-700">{description}</div>
        <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {date}
        </span>
      </div>
    </Link>
  );
};

export default BlogPostThumbnail;
