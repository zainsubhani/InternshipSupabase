import React from "react";
import Box from "./Components/Box";
import Build from "./Components/Build";
import Footer from "./Components/Footer";

import Enterprise from "./Components/Enterprise";
import TableEditor from "./Components/tableeditor";
import Review from "./Components/Review";
const App = () => {
  const data = [
    {
      id: "1",
      pic: 'https://supabase.com/_next/image?url=%2Fimages%2Fcase-study-monitoro.jpg&w=1200&q=70',
      des: "A web crawler handling millions of API requests.",
      subdes:
        "see how Monitoro built an automated a scraping platform using Supabase.",
    },
    {
      id: "2",
      pic: 'https://supabase.com/_next/image?url=%2Fimages%2Fcase-study-xendit.jpg&w=1200&q=70',
      des: "Counter-fraud watchlists for the fintech industry.",
      subdes: "see how Xendit use Supabase to build a full-text search engine.",
    },
    {
      id: "3",
      pic: 'https://supabase.com/_next/image?url=%2Fimages%2Fcase-study-tayfab.jpg&w=1200&q=70',
      des: "A no-code website builder,deployed in seven days.",
      subdes:
        "See how Tayfa went from idea to paying customer in less than 30 days",
    },
  ];
  const data2 = [
    {
      id: '1',
      title : 'Svelte kanban board',
      subtitle: 'A Trello clone using Supabase as the storage system.',
      icon:  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icondes: 'joshnuss',
      subdes: 'supabase-kanban',
      btext:'Launch Demo'
    },
    {
      id: '2',
      title : 'Next.js Realtime chat app',
      subtitle: 'Next.js Slack clone app using Supabase realtime subscriptions',
      icon:  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icondes: 'supabase',
      subdes: 'nextjs-slack-clone',
      btext: 'View Code'
    },
    {
      id: '3',
      title : 'Next.js Subscription and Auth',
      subtitle: 'The all-in-one starter kit for high-performance SaaS applications.',
      icon:  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icondes: 'Vercel',
      subdes: 'nextjs-subscription-payments',
      btext:'Launch Demo'
    },
     {
      id: '4',
      title : 'Expo Starter',
      subtitle: 'Template bottom tabs with auth flow (Typescript)',
      icon:  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icondes: 'codingki',
      subdes: 'react-native-expo-template',
      btext: 'View Code'
    },
     {
      id: '5',
      title : 'NestJS example',
      subtitle: 'NestJS example using Supabase Auth',
      icon:  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icondes: 'hiro1107',
      subdes: 'nestjs-supabase-auth',
      btext: 'View Code'
    },
     {
      id: '6',
      title : 'ReactJS realtime chat app',
      subtitle: 'Example app of real-time chat using supabase realtime api',
      icon:  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      icondes: 'shwosner',
      subdes: 'realtime-chat-supabase-react',
      btext:'Launch Demo'
    },
    
  ]
  return (
    <div className="bg-[#1C1C1C]">
      <div className="grid grid-cols-3 gap-6  p-20" >
      {  data2.map((v,k)=>(
      <Review key={v.id} icon={v.icon} icondes ={v.icondes} title ={v.title} subtitle={v.subtitle} subdes ={v.subdes} btext={v.btext} />))}
      </div>
      <TableEditor />
      <Enterprise />
      <div className="p-20 grid grid-cols-3 gap-10">
        {data.map((v, k) => (
          <Box key={v.id} pic={v.pic} des={v.des} subdes={v.subdes} />
        ))}
      </div>
      <Build />
      <Footer />
    </div>
  );
};

export default App;




