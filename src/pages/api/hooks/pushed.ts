import { type NextApiRequest, type NextApiResponse } from "next";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  return res.status(200).json({ message: "Hello" });
};

export default handle;
