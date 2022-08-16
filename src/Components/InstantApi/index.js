import React from "react";

const InstantApi = () => {
  return (
    <div className="lg:p-20 md:p-10 p-5 ">
      <div>
        <p className="text-white text-2xl font-semibold">
          Instant APIs that do the hard work for you
        </p>
        <p className="pt-5 font-semibold text-lg text-gray-400">
          We introspect your database to provide APIs instantly. Stop building
          repetitive CRUD endpoints and focus on your product.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 lg:pt-20 md:pt-10 pt-5 text-gray-400">
        <div className="md:pb-10 pb-3">
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
