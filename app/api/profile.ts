// pages/api/profile.ts
import { NextApiRequest, NextApiResponse } from "next";

export default (_req: NextApiRequest, res: NextApiResponse) => {
    // Simulated user data, replace with actual data fetching
    const userProfile = {
        username: "JohnDoe",
        profileImage: "https://picsum.photos/200",
    };

    res.status(200).json(userProfile);
};
