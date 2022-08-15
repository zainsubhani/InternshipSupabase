import React from "react";

const InstantApi = () => {
  return (
    <div className="p-20 ">
      <div>
        <p className="text-white text-2xl font-semibold">
          Instant APIs that do the hard work for you
        </p>
        <p className="pt-5 font-semibold text-lg text-gray-400">
          We introspect your database to provide APIs instantly. Stop building
          repetitive CRUD endpoints and focus on your product.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 pt-20 text-gray-400">
        <div className="pb-10">
          <p className="text-[white] font-semibold">TypeScript Support</p>
          <p className="pt-3 font-semibold text-gray-400">
            Type definitions built directly from your database schema
          </p>
          <button className="pt-3">Explore more ></button>
        </div>
        <div>
          <p className="text-[white] font-semibold">Install from CDN</p>
          <p className="pt-3 text-gray-400">
            Use Supabase in the browser without a build process
          </p>
          <button className="pt-3">Explore more ></button>
        </div>
        <div>
          <p className="text-[white] font-semibold">Local emulator</p>
          <p className="pt-3 text-gray-400">
            Develop locally and push to production when you're ready
          </p>
          <button className="pt-3">Explore more ></button>
        </div>
        <div>
          <p className="text-[white] font-semibold">Supabase CLI</p>
          <p className="pt-3 text-gray-400">
            Manage Supabase projects from your local machine
          </p>
          <button className="pt-3">Explore more ></button>
        </div>
      </div>
    </div>
  );
};

export default InstantApi;
