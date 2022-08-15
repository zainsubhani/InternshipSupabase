import { useState } from "react";

export function Program2() {
  const tabsData = [
    {
      label: "Create user",
      heading: "Manage your data with the familiarity of a spreadsheet",
      content:
        "You dont have to be a database expert to use Supabase. Our table editor makes Postgres easy to use, even for non-techies. You can do everything right in our dashboard.",
      btn: "Explore Table View >",
    },
    {
      label: "Realtime subscription",
      heading: "In-built SQL editor for when you need greater control",
      content:
        "Write, save, and execute SQL queries directly on our dashboard, with templates to save you time. Run common queries and even build applications using our growing list of templates",
    },
    {
      label: "Read a record",
      heading: "User management as straight-forward as it can be",
      content:
        "Easily manage your users with Supabase Auth, with email logins, magic links, and third-party logins. Create complex access policies with SQL rules to fit your unique business needs.",
    },
    {
      label: "Create a record",
      heading: "User management as straight-forward as it can be",
      content:
        "Easily manage your users with Supabase Auth, with email logins, magic links, and third-party logins. Create complex access policies with SQL rules to fit your unique business needs.",
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="p-20">
      <div className="flex space-x-3 border-b ">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={` border-1 border-[white]  text-gray-500 border-b-2 w-auto transition-colors duration-100 ${
                idx === activeTabIndex
                  ? "border-[white]"
                  : "border-transparent hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className="py-4">
        <p className="text-white text-xl ">
          {tabsData[activeTabIndex].heading}
        </p>
        <p className="pt-5 text-gray-400 ">
          {tabsData[activeTabIndex].content}
        </p>
      </div>
      <div>
        <button className="text-gray-400 text-sm">
          {tabsData[activeTabIndex].btn}
        </button>
      </div>
    </div>
  );
}
export default Program2;
