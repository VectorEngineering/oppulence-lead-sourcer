interface RevalidateKeys {
  [key: string]: string;
}

export const revalidateKeys: RevalidateKeys = {
  leads: "leads",
  getLeads: "get-leads",
  currentUser: "current-user",
  currentDatabaseUser: "current-database-user",
  userData: "user-data",
};
