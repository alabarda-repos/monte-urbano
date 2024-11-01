import Image from "next/image";
import Link from "next/link";

export interface IBookThumbnailParams {
  image: string;
  title: string;
  description: string;
  link: string;
}

const BookThumbnail = ({
  image,
  title,
  description,
  link,
}: IBookThumbnailParams) => {
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
      </div>
    </Link>
  );
};

export default BookThumbnail;
