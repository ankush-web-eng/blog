
import Link from "next/link";
import Image from "next/image";

interface form {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  type: string;
}

export default function Ghost({ params }: { params: form }) {

  return (
      <Link  href={`/blogs/${params.id}`}
        className="shadow-lg items-center justify-center relative rounded-xl text-white w-full h-52 flex flex-col space-y-3 p-2"
        >
        <Image src={params.image} alt={params.title} width={500} height={230} style={{color: 'transparent'}} className="z-[-10] max-w-full max-h-full rounded-xl object-cover bg-repeat bg-over backdrop-filter backdrop-blur-2 absolute right-0 top-0" />
        <strong className="text-2xl font-bold drop-shadow-md">{params.title}</strong>
      </Link>
  );
}
