// Utility to compute pet mood based on time in system
const getMood = (createdAt) => {
  const now = Date.now();
  const diffMs = now - new Date(createdAt).getTime();
  const days = diffMs / (1000 * 60 * 60 * 24);

  // console.log("Days since creation:", days); 
  // console.log("Created at:", createdAt); 
  // console.log("Current time:", now); 
  // console.log("Difference in milliseconds:", diffMs); 

  if (days < 1) return "Happy";
  if (days < 3) return "Excited";
  return "Sad";
};

module.exports = { getMood };
