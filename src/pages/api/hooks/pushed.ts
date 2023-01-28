import { type NextApiRequest, type NextApiResponse } from "next";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  console.log(body);
  return res.status(200).json({ message: "Hello" });
};

export default handle;
