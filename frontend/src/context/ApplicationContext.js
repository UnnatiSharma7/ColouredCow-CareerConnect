import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create context
const ApplicationContext = createContext();

// 2. Export a custom hook for easy usage
export const useApplicationContext = () => useContext(ApplicationContext);

// 3. Provider component
export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [counts, setCounts] = useState({
    approved: 0,
    rejected: 0,
    pending: 0,
  });

  // Whenever applications change, update counts
  useEffect(() => {
    const approved = applications.filter((a) => a.status === "approved").length;
    const rejected = applications.filter((a) => a.status === "rejected").length;
    const pending = applications.filter((a) => a.status === "Pending").length;

    setCounts({ approved, rejected, pending });
  }, [applications]);
  console.log("pending applications: ",counts.pending)

  return (
    <ApplicationContext.Provider value={{ applications, setApplications, counts }}>
      {children}
    </ApplicationContext.Provider>
  );
};
