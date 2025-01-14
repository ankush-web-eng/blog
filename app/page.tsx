
import Ghost from "@/components/ghost";
import axios from "axios";
import { TbLoader3 } from "react-icons/tb";
interface form {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  type: string;
}

export default async function Page() {

  const res = await axios.get(`${process.env.GHOST_API_URL}/blog`);

  return (
    <div className="min-h-screen flex justify-center items-center px-2 py-8 overflow-y-auto">
      <div className="grid grid-cols-1 px-3 md:px-9 gap-6 py-6 w-full max-md:overflow-auto md:grid-cols-2 lg:grid-cols-3">
        {res.data.message.data !== null ? (
          res.data.message.data.map((ghost : form, index : any) => (
            <Ghost key={index} params={ghost} />
          ))
        ) : (
          <TbLoader3 className="animate-spin" size={48} color="sky" />
        )}
      </div>
    </div>
  )
  
}