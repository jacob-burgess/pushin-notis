import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  console.log(body);
  return res.status(200).json({ message: "Hello" });
};
