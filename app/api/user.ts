// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from "next";

export default (_req: NextApiRequest, res: NextApiResponse) => {
    // Simulated user data, replace with actual data fetching
    const userData = {
        dashboardStats: {
            /* ... */
        },
        analyticsData: {
            /* ... */
        },
    };

    res.status(200).json(userData);
};
