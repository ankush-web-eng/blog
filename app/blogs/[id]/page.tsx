import axios from "axios";
import Link from "next/link";

import { IoMdArrowRoundBack } from "react-icons/io";
import Loading from "@/components/loading";

type Params = {
  id: string;
};

interface BlogData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  type: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  try {
    const id = params.id;
    const response = await axios.get(`${process.env.GHOST_API_URL}/blog/${id}`);
    const data: BlogData = response.data.message.data;

    return {
      title: `${data?.title || "Loading..."} | Ankush's World`,
      description: data?.subtitle || "Read the latest Blogs by Ankush",
      openGraph: {
        title: `${data?.title || "Blog"} | Ankush's World`,
        description: data?.subtitle || "Read the latest Blogs by Ankush",
        images: [
          {
            url: data?.image || "/og-image.png",
            width: 1200,
            height: 627,
            alt: `${data?.title} | Ankush's World`,
          },
        ],
        type: "article",
        locale: "en_US",
        siteName: "Ankush's Blog",
      },
      twitter: {
        card: "summary_large_image",
        title: `${data?.title || "Blog"} | Ankush's World`,
        description: data?.subtitle || "Read the latest Blogs by Ankush",
        images: [
          {
            url: data?.image || "/og-image.png",
            alt: `${data?.title} | Ankush's World`,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Blog | Ankush's World",
      description: "Read the latest Blogs by Ankush",
    };
  }
}

export default async function Page({ params }: { params: Params }) {
  try {
    const id = params.id;

    const response = await axios.get(`${process.env.GHOST_API_URL}/blog/${id}`);
    const data = response.data.message.data;

    let sym = '",'
    let newData = data?.content.toString() || "";
    let sarray = newData.split(sym);
    let parray = new Array();
    let array = new Array();
    for (let i of sarray) {
      parray.push(i.replace(/["[]/g, ""));
    }
    for (let i of parray) {
      array.push(i.replace(/[]]/g, ""))
    }

    return (
      <div className="h-screen w-full pb-6 md:px-20 flex flex-col justify-start px-3 pt-8 space-y-10">
        <Link href={'/'} className="cursor-pointer">
          <IoMdArrowRoundBack color="blue" size={28} />
        </Link>
        <h1 className="text-4xl font-extrabold">
          {data?.title || <Loading>Loading Blog</Loading>}
        </h1>
        <p className="text-slate-700 font-semibold text-2xl">{data?.subtitle}</p>

        {array.map((content, index) => (
          <p className="text-slate-500 text-sm" key={index}>{content}</p>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return <div>Error loading blog post. Please try again later.</div>;
  }
}