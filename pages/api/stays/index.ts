import { NextApiRequest, NextApiResponse } from "next";
import stays from "./stays.json"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(stays)
}
