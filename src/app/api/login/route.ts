import { signJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
// import {useRouter} from "next/navigation";

interface RequestBody {
  username: string;
  password: string;
}
export async function POST(request: Request) {
  // const router = useRouter();
  const body: RequestBody = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.username,
    },
  });
  // console.log('token: ', token)
  // console.log(user)
  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    console.log('result in login', result)
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}