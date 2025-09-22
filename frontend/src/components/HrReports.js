import React, { useMemo } from "react";
import { useApplicationContext } from "../context/ApplicationContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const jobPostings = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "UI/UX Designer",
  "HR Associate"
];

const HrReports = () => {
  const { applications } = useApplicationContext();

  // 1. Average time taken for action (approval/rejection)
  const avgTime = useMemo(() => {
    const completedApps = applications.filter(
      (app) => app.status === "approved" || app.status === "rejected"
    );

    if (completedApps.length === 0) return 0;

    const totalTime = completedApps.reduce((sum, app) => {
      const created = new Date(app.createdAt);
      const updated = new Date(app.updatedAt);
      return sum + (updated - created);
    }, 0);

    return Math.round(totalTime / completedApps.length / (1000 * 60 * 60 * 24)); // in days
  }, [applications]);

  // 2. Job designation trend in last 30 days
  const jobData = useMemo(() => {
    const last30Days = new Date();
    last30Days.setDate(last30Days.getDate() - 30);

    return jobPostings.map((role) => {
      const count = applications.filter(
        (app) =>
          app.jobRole === role &&
          new Date(app.createdAt) >= last30Days
      ).length;

      return { jobRole: role, applications: count };
    });
  }, [applications]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-">Reports</h2>
      <div className="mb-6">
        <h3 className="text-lg">
          Average Time to Process Applications:
        </h3>
        <p>{avgTime} days</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Job Designation Trend</h3>
        <div style={{ marginTop: "50px" }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart 
          data={jobData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="jobRole" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="applications" fill="#82cb9fcf" />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HrReports;
