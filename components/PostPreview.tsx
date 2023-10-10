import Link from "next/link";
import { PostMetadata } from "./PostMetadata";




const PostPreview = (props: PostMetadata) => {
  
  return (
    <div className="border border-slate-600 rounded-md shadow-xl shadow-black-500 posts bg-springBud mx-auto p-2 w-3/4">
      <Link href={`/posts/${props.slug}`} className="text-cianOscuro">
        <h2 className=" text-slate-100 hover:underline hover:underline-offset-4 mb-4 font-bold">{props.title}</h2>
      </Link>
      <p className="text-md text-cianOscuro font-light underline underline-offset-2">{props.subtitle}</p>
      <p className="text-cianOscuro my-2 font-thin">{props.date}</p>
    </div>
  );
};

export default PostPreview;
