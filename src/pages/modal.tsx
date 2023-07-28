// export const getServerSideProps = () => {
//   const
//   return ({
//     props: {

//     }
//   })
// }
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ datasources: {  db: { url: "mysql://3tyo9geeadovxfe3ps7w:pscale_pw_oWvwQy5Cc5eLgHYugVWVgBtx2onumEYBBI0jz7C708N@aws.connect.psdb.cloud/to-do?sslaccept=strict" } } });

export default function Home() {
  return (
    <div></div>
  )
}