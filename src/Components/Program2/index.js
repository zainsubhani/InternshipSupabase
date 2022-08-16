import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";

const Program2 = () => {
  const [active, setActive] = useState(0);
  let a = [
    {
      content: (
        <div className="bg-[#181818] h-[60vh] mt-5 rounded-md">
          <div className="p-5 text-white">
            <div className="flex justify-end">
              <div>
                <AiOutlineCopy color="gray" />
              </div>
            </div>

            <code>
              <span className="text-[#569CD6]">import </span> &#123;
              createClient &#125; <span className="text-[#569CD6]"> from </span>{" "}
              <span className="text-[#35A573]"> @supabase/supabase-js </span>
            </code>
            <p className="text-[#75715E]">// Initialize </p>
            <code>
              {" "}
              <span className="text-[#569CD6]"> const </span> supabaseUrl =
              <span className="text-[#35A573]">
                {" "}
                'https://chat-room.supabase.co'{" "}
              </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabaseKey =
              <span className="text-[#35A573]"> 'public-anon-key' </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabase =
              createClient(supabaseUrl, supabaseKey)
            </code>
            <p className="mt-5 text-[#75715E] ">// Create a new user</p>
            <code>
              <span className="text-[#569CD6]"> const </span> &#123;(user,
              error) &#125; = <span className="text-[#569CD6]"> const </span>{" "}
              supabase.auth.signUp(&#123;
            </code>
            <p> email: 'example@email.com',</p>
            <p> password: 'example-password',</p>
            <code> &#125;)</code>
          </div>
        </div>
      ),
      name: "Create_a_user",
    },
    {
      content: (
        <div className="bg-[#181818] h-[60vh] mt-5 rounded-md">
          <div className="p-5 text-white">
            <div className="flex justify-end">
              <div>
                <AiOutlineCopy color="gray" />
              </div>
            </div>

            <code>
              <span className="text-[#569CD6]">import </span> &#123;
              createClient &#125; <span className="text-[#569CD6]"> from </span>{" "}
              <span className="text-[#35A573]"> @supabase/supabase-js </span>
            </code>
            <p className="text-[#75715E]">// Initialize </p>
            <code>
              {" "}
              <span className="text-[#569CD6]"> const </span> supabaseUrl =
              <span className="text-[#35A573]">
                {" "}
                'https://chat-room.supabase.co'{" "}
              </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabaseKey =
              <span className="text-[#35A573]"> 'public-anon-key' </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabase =
              createClient(supabaseUrl, supabaseKey)
            </code>
            <p className="mt-5 text-[#75715E] ">// Create a new user</p>
            <code>
              <span className="text-[#569CD6]"> const </span> &#123;(user,
              error) &#125; = <span className="text-[#569CD6]"> const </span>{" "}
              supabase.auth.signUp(&#123;
            </code>
            <p> email: 'example@email.com',</p>
            <p> password: 'example-password',</p>
            <code> &#125;)</code>
          </div>
        </div>
      ),
      name: "Realtime_subscriptions",
    },
    {
      content: (
        <div className="bg-[#181818] h-[60vh] mt-5 rounded-md">
          <div className="p-5 text-white">
            <div className="flex justify-end">
              <div>
                <AiOutlineCopy color="gray" />
              </div>
            </div>

            <code>
              <span className="text-[#569CD6]">import </span> &#123;
              createClient &#125; <span className="text-[#569CD6]"> from </span>{" "}
              <span className="text-[#35A573]"> @supabase/supabase-js </span>
            </code>
            <p className="text-[#75715E]">// Initialize </p>
            <code>
              {" "}
              <span className="text-[#569CD6]"> const </span> supabaseUrl =
              <span className="text-[#35A573]">
                {" "}
                'https://chat-room.supabase.co'{" "}
              </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabaseKey =
              <span className="text-[#35A573]"> 'public-anon-key' </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabase =
              createClient(supabaseUrl, supabaseKey)
            </code>
            <p className="mt-5 text-[#75715E] ">// Create a new user</p>
            <code>
              <span className="text-[#569CD6]"> const </span> &#123;(user,
              error) &#125; = <span className="text-[#569CD6]"> const </span>{" "}
              supabase.auth.signUp(&#123;
            </code>
            <p> email: 'example@email.com',</p>
            <p> password: 'example-password',</p>
            <code> &#125;)</code>
          </div>
        </div>
      ),
      name: "Read_a_record",
    },
    {
      content: (
        <div className="bg-[#181818] h-[60vh] mt-5 rounded-md">
          <div className="p-5 text-white">
            <div className="flex justify-end">
              <div>
                <AiOutlineCopy color="gray" />
              </div>
            </div>

            <code>
              <span className="text-[#569CD6]">import </span> &#123;
              createClient &#125; <span className="text-[#569CD6]"> from </span>{" "}
              <span className="text-[#35A573]"> @supabase/supabase-js </span>
            </code>
            <p className="text-[#75715E]">// Initialize </p>
            <code>
              {" "}
              <span className="text-[#569CD6]"> const </span> supabaseUrl =
              <span className="text-[#35A573]">
                {" "}
                'https://chat-room.supabase.co'{" "}
              </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabaseKey =
              <span className="text-[#35A573]"> 'public-anon-key' </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabase =
              createClient(supabaseUrl, supabaseKey)
            </code>
            <p className="mt-5 text-[#75715E] ">// Create a new user</p>
            <code>
              <span className="text-[#569CD6]"> const </span> &#123;(user,
              error) &#125; = <span className="text-[#569CD6]"> const </span>{" "}
              supabase.auth.signUp(&#123;
            </code>
            <p> email: 'example@email.com',</p>
            <p> password: 'example-password',</p>
            <code> &#125;)</code>
          </div>
        </div>
      ),
      name: "Create_a_record",
    },
    {
      content: (
        <div className="bg-[#181818] h-[60vh] mt-5 rounded-md">
          <div className="p-5 text-white">
            <div className="flex justify-end">
              <div>
                <AiOutlineCopy color="gray" />
              </div>
            </div>

            <code>
              <span className="text-[#569CD6]">import </span> &#123;
              createClient &#125; <span className="text-[#569CD6]"> from </span>{" "}
              <span className="text-[#35A573]"> @supabase/supabase-js </span>
            </code>
            <p className="text-[#75715E]">// Initialize </p>
            <code>
              {" "}
              <span className="text-[#569CD6]"> const </span> supabaseUrl =
              <span className="text-[#35A573]">
                {" "}
                'https://chat-room.supabase.co'{" "}
              </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabaseKey =
              <span className="text-[#35A573]"> 'public-anon-key' </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabase =
              createClient(supabaseUrl, supabaseKey)
            </code>
            <p className="mt-5 text-[#75715E] ">// Create a new user</p>
            <code>
              <span className="text-[#569CD6]"> const </span> &#123;(user,
              error) &#125; = <span className="text-[#569CD6]"> const </span>{" "}
              supabase.auth.signUp(&#123;
            </code>
            <p> email: 'example@email.com',</p>
            <p> password: 'example-password',</p>
            <code> &#125;)</code>
          </div>
        </div>
      ),
      name: "Update_a_record",
    },
    {
      content: (
        <div className="bg-[#181818] h-[60vh] mt-5 rounded-md">
          <div className="p-5 text-white">
            <div className="flex justify-end">
              <div>
                <AiOutlineCopy color="gray" />
              </div>
            </div>

            <code>
              <span className="text-[#569CD6]">import </span> &#123;
              createClient &#125; <span className="text-[#569CD6]"> from </span>{" "}
              <span className="text-[#35A573]"> @supabase/supabase-js </span>
            </code>
            <p className="text-[#75715E]">// Initialize </p>
            <code>
              {" "}
              <span className="text-[#569CD6]"> const </span> supabaseUrl =
              <span className="text-[#35A573]">
                {" "}
                'https://chat-room.supabase.co'{" "}
              </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabaseKey =
              <span className="text-[#35A573]"> 'public-anon-key' </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabase =
              createClient(supabaseUrl, supabaseKey)
            </code>
            <p className="mt-5 text-[#75715E] ">// Create a new user</p>
            <code>
              <span className="text-[#569CD6]"> const </span> &#123;(user,
              error) &#125; = <span className="text-[#569CD6]"> const </span>{" "}
              supabase.auth.signUp(&#123;
            </code>
            <p> email: 'example@email.com',</p>
            <p> password: 'example-password',</p>
            <code> &#125;)</code>
          </div>
        </div>
      ),
      name: "Update_a_record",
    },
    {
      content: (
        <div className="bg-[#181818] h-[60vh] mt-5 rounded-md">
          <div className="p-5 text-white">
            <div className="flex justify-end">
              <div>
                <AiOutlineCopy color="gray" />
              </div>
            </div>

            <code>
              <span className="text-[#569CD6]">import </span> &#123;
              createClient &#125; <span className="text-[#569CD6]"> from </span>{" "}
              <span className="text-[#35A573]"> @supabase/supabase-js </span>
            </code>
            <p className="text-[#75715E]">// Initialize </p>
            <code>
              {" "}
              <span className="text-[#569CD6]"> const </span> supabaseUrl =
              <span className="text-[#35A573]">
                {" "}
                'https://chat-room.supabase.co'{" "}
              </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabaseKey =
              <span className="text-[#35A573]"> 'public-anon-key' </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabase =
              createClient(supabaseUrl, supabaseKey)
            </code>
            <p className="mt-5 text-[#75715E] ">// Create a new user</p>
            <code>
              <span className="text-[#569CD6]"> const </span> &#123;(user,
              error) &#125; = <span className="text-[#569CD6]"> const </span>{" "}
              supabase.auth.signUp(&#123;
            </code>
            <p> email: 'example@email.com',</p>
            <p> password: 'example-password',</p>
            <code> &#125;)</code>
          </div>
        </div>
      ),
      name: "Update_a_record",
    },
    {
      content: (
        <div className="bg-[#181818] h-[60vh] mt-5 rounded-md">
          <div className="p-5 text-white">
            <div className="flex justify-end">
              <div>
                <AiOutlineCopy color="gray" />
              </div>
            </div>

            <code>
              <span className="text-[#569CD6]">import </span> &#123;
              createClient &#125; <span className="text-[#569CD6]"> from </span>{" "}
              <span className="text-[#35A573]"> @supabase/supabase-js </span>
            </code>
            <p className="text-[#75715E]">// Initialize </p>
            <code>
              {" "}
              <span className="text-[#569CD6]"> const </span> supabaseUrl =
              <span className="text-[#35A573]">
                {" "}
                'https://chat-room.supabase.co'{" "}
              </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabaseKey =
              <span className="text-[#35A573]"> 'public-anon-key' </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabase =
              createClient(supabaseUrl, supabaseKey)
            </code>
            <p className="mt-5 text-[#75715E] ">// Create a new user</p>
            <code>
              <span className="text-[#569CD6]"> const </span> &#123;(user,
              error) &#125; = <span className="text-[#569CD6]"> const </span>{" "}
              supabase.auth.signUp(&#123;
            </code>
            <p> email: 'example@email.com',</p>
            <p> password: 'example-password',</p>
            <code> &#125;)</code>
          </div>
        </div>
      ),
      name: "Update_a_record",
    },
    {
      content: (
        <div className="bg-[#181818] h-[60vh] mt-5 rounded-md">
          <div className="p-5 text-white">
            <div className="flex justify-end">
              <div>
                <AiOutlineCopy color="gray" />
              </div>
            </div>

            <code>
              <span className="text-[#569CD6]">import </span> &#123;
              createClient &#125; <span className="text-[#569CD6]"> from </span>{" "}
              <span className="text-[#35A573]"> @supabase/supabase-js </span>
            </code>
            <p className="text-[#75715E]">// Initialize </p>
            <code>
              {" "}
              <span className="text-[#569CD6]"> const </span> supabaseUrl =
              <span className="text-[#35A573]">
                {" "}
                'https://chat-room.supabase.co'{" "}
              </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabaseKey =
              <span className="text-[#35A573]"> 'public-anon-key' </span>
            </code>
            <code>
              <span className="text-[#569CD6]"> const </span> supabase =
              createClient(supabaseUrl, supabaseKey)
            </code>
            <p className="mt-5 text-[#75715E] ">// Create a new user</p>
            <code>
              <span className="text-[#569CD6]"> const </span> &#123;(user,
              error) &#125; = <span className="text-[#569CD6]"> const </span>{" "}
              supabase.auth.signUp(&#123;
            </code>
            <p> email: 'example@email.com',</p>
            <p> password: 'example-password',</p>
            <code> &#125;)</code>
          </div>
        </div>
      ),
      name: "Update_a_record",
    },
  ];
  return (
    <div className="lg:p-20 md:p-10 p-5">
      <div>
        <div class="flex flex-nowrap"></div>
        <ul className="flex  flex flex-nowrap overflow-x-scroll	 text-gray-500">
          {a.map((v, k) => (
            <div
              onClick={() => setActive(k)}
              className={`w-[100%]  border border-gray-500 p-1 text-xs rounded mr-1 hover:text-[white] active:bg-[white] ${
                active === k && "bg-white text-black"
              }`}
            >
              {v.name}
            </div>
          ))}
        </ul>
      </div>
      {a[active].content}
    </div>
  );
};

export default Program2;
