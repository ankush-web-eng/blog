
import axios from "axios";
import Link from "next/link";

import { IoMdArrowRoundBack } from "react-icons/io";
import Loading from "@/components/loading";

type Params = {
  id: string;
};

interface form {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  type: string;
}

export default async function Page({ params }: { params: Params }) {
  const id = params.id;

  const response = await axios.get(`https://api.ankushsingh.tech/blog/${id}`);
  const data = response.data.message.data;

  let sym = '",'
  let newData = data?.content.toString() || ""
  let sarray = newData.split(sym)
  let array = new Array()
  for (let i of sarray) {
    array.push(i.replace(/["[]/g, ""))
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
      {/* <p className="text-slate-700 text-2xl">{data?.content}</p> */}

      {data && array.map((data, index) => (
        <p className="text-slate-500 text-sm" key={index} >{data}</p>
      ))}
    </div>
  );
}