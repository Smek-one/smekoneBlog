import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

import {HiArrowNarrowLeft} from "react-icons/hi"
import Link from "next/link";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((date) => ({
    slug: date.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
   <div>
      <div className="my-12 text-center">
        <h1 className="text-center p-8 text-cianOscuro text-3xl font-bold underline">{post.data.title}</h1>
        <h1 className="text-center p-8  text-xl w-100 mx-auto bg-cianOscuro rounded-md text-shadeBrown font-semibold ">{post.data.subtitle}</h1>
        <p className="text-center subpixel-antialiased mt-2 text-cianOscuro font-thin">{post.data.date}</p>
      </div>

      <article className="prose m-auto lg:w-full">
        <Markdown>{post.content}</Markdown>
      </article>
      <div className="flex justify-center items-center text-cianOscuro mt-6 pb-6">
                <HiArrowNarrowLeft />
            <Link href="/">Retour à l'accueil</Link>
            </div>
      </div>
  );
};

export default PostPage;
