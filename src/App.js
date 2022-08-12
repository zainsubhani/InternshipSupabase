import React from "react";
import Box from "./Components/Box";
import Build from "./Components/Build";
import Footer from "./Components/Footer";

import Enterprise from "./Components/Enterprise";
import TableEditor from "./Components/tableeditor";
import Review from "./Components/Review";
import Supabase from "./Components/supabase";
import TwitterReview from "./Components/ReviewTwitter";
import Community from "./Components/Community";
import Products from "./Components/Products";
import { FiDatabase } from "react-icons/fi";
import Focus from "./Components/focus";
import Weekend from "./Components/Weekend";
import BasicVideo from "./Components/BasicVideo";
import Header1 from "./Components/Header1";
import Navbar from "./Components/Navbar";
const App = () => {
  const data = [
    {
      id: "1",
      pic: "https://supabase.com/_next/image?url=%2Fimages%2Fcase-study-monitoro.jpg&w=1200&q=70",
      des: "A web crawler handling millions of API requests.",
      subdes:
        "see how Monitoro built an automated a scraping platform using Supabase.",
    },
    {
      id: "2",
      pic: "https://supabase.com/_next/image?url=%2Fimages%2Fcase-study-xendit.jpg&w=1200&q=70",
      des: "Counter-fraud watchlists for the fintech industry.",
      subdes: "see how Xendit use Supabase to build a full-text search engine.",
    },
    {
      id: "3",
      pic: "https://supabase.com/_next/image?url=%2Fimages%2Fcase-study-tayfab.jpg&w=1200&q=70",
      des: "A no-code website builder,deployed in seven days.",
      subdes:
        "See how Tayfa went from idea to paying customer in less than 30 days",
    },
  ];
  const data2 = [
    {
      id: "1",
      title: "Svelte kanban board",
      subtitle: "A Trello clone using Supabase as the storage system.",
      icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      icondes: "joshnuss",
      subdes: "supabase-kanban",
      btext: "Launch Demo",
    },
    {
      id: "2",
      title: "Next.js Realtime chat app",
      subtitle: "Next.js Slack clone app using Supabase realtime subscriptions",
      icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      icondes: "supabase",
      subdes: "nextjs-slack-clone",
      btext: "View Code",
    },
    {
      id: "3",
      title: "Next.js Subscription and Auth",
      subtitle:
        "The all-in-one starter kit for high-performance SaaS applications.",
      icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      icondes: "Vercel",
      subdes: "nextjs-subscription-payments",
      btext: "Launch Demo",
      showbutton: true,
    },
    {
      id: "4",
      title: "Expo Starter",
      subtitle: "Template bottom tabs with auth flow (Typescript)",
      icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      icondes: "codingki",
      subdes: "react-native-expo-template",
      btext: "View Code",
    },
    {
      id: "5",
      title: "NestJS example",
      subtitle: "NestJS example using Supabase Auth",
      icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      icondes: "hiro1107",
      subdes: "nestjs-supabase-auth",
      btext: "View Code",
    },
    {
      id: "6",
      title: "ReactJS realtime chat app",
      subtitle: "Example app of real-time chat using supabase realtime api",
      icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      icondes: "shwosner",
      subdes: "realtime-chat-supabase-react",
      btext: "Launch Demo",
    },
  ];
  const TwitterData = [
    {
      id: 1,
      tname: "@thatguy_tex",
      tdes: `            "Working with @supabase has been one of the best dev experiences
            I've had lately. Incredibly easy to set up, great documentation, and
            so many fewer hoops to jump through than the competition. I
            definitely plan to use it on any and all future projects."`,
    },
    {
      id: 2,
      tname: "@lxoyeDesign",
      tdes: `            @supabase
 is just 🤯
Now I see why a lot of people love using it as a backend for their applications. I am really impressed with how easy it is to set up an Auth and then just code it together for the frontend.

@IngoKpp
 now I see your joy with Supabase

#coding #fullstackwebdev`,
    },
    {
      id: 3,
      tname: "@varlenneto",
      tdes: `          I've been using 
@supabase
 for two personal projects and it has been amazing being able to use the power of Postgres and don't have to worry about the backend`,
    },
    {
      id: 4,
      tname: "@justinjunodev",
      tdes: `            Y'all 
@supabase
 + 
@nextjs
 is amazing! 🙌

Barely an hour into a proof-of-concept and already have most of the functionality in place. 🤯🤯🤯`,
    },
    {
      id: 5,
      tname: "@BraydonCoyer",
      tdes: `            And thanks to 
@supabase
, I was able to go from idea to launched feature in a matter of hours. 

Absolutely amazing!`,
    },
  ];
  const productsdata = [
    {
      id: 1,
      icon: <FiDatabase size={20} />,
      icondes: "Database",
      des: `Every project is a full Postgres database, the world's most trusted relational database.`,
    },
    {
      id: 2,
      icon: <FiDatabase size={20} />,
      icondes: "Authentication",
      des: `Add user sign ups and logins, securing your data with Row Level Security.`,
    },
    {
      id: 3,
      icon: <FiDatabase size={20} />,
      icondes: "Storage",
      des: `Store, organize, and serve large files. Any media, including videos and images.`,
    },
    {
      id: 4,
      icon: <FiDatabase size={20} />,
      icondes: "Edge Functions",
      des: `Write custom code without deploying or scaling servers.`,
    },
  ];
  return (
    <div>
      <Header1 />

      <div className="bg-[#1C1C1C]">
        <Navbar />
        <div className="grid grid-cols-2 p-20 gap-20">
          <div>
            <Weekend />
          </div>
          <div>
            <BasicVideo />
          </div>
        </div>
        <Focus />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:p-20 md:p-10 p-6 gap-20">
          {productsdata.map((v, k) => (
            <Products
              key={v.id}
              icon={v.icon}
              icondes={v.icondes}
              des={v.des}
            />
          ))}
        </div>
        <Community />
        <div className="grid grid-cols-5 gap-5 ">
          {TwitterData.map((v, k) => (
            <TwitterReview key={v.id} name={v.tname} des={v.tdes} />
          ))}
        </div>
        <Supabase />
        <div className="grid lg:grid-cols-3 md:grid-col-2 grid-cols-1 gap-6  lg:p-20 md:p-14 p-8">
          {data2.map((v, k) => (
            <Review
              key={v.id}
              showbutton={v.showbutton}
              icon={v.icon}
              icondes={v.icondes}
              title={v.title}
              subtitle={v.subtitle}
              subdes={v.subdes}
              btext={v.btext}
            />
          ))}
        </div>
        <TableEditor />
        <Enterprise />
        <div className="lg:p-20 p-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
          {data.map((v, k) => (
            <Box key={v.id} pic={v.pic} des={v.des} subdes={v.subdes} />
          ))}
        </div>
        <Build />
        <Footer />
      </div>
    </div>
  );
};

export default App;
