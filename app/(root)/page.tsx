import { promises } from "dns";
import SearchForm from "../../components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({searchParams}: {
  searchParams: Promise <{query?: string}>

}) {
  const query = (await searchParams).query;

  const posts=[
    {
      _createdAt: new Date(), 
      views: 55,
      author: {_id:1 ,name:"John Doe"},
      _id:"1",
      desciption: "This is a test description",
      image: "https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3R8ZW58MHx8MHx8fDA%3D",
      category: "Robots",
      title: "We Robots",
    }
  ];


  return (
    <>
    <section className="pink_container">
    <h1 className="heading">
      Pitch Your StartUp, <br/> Connect With Entrepreneurs
    </h1>

    <p className="sub-heading !max-w-3xl">
      Submit Ideas , Vote On Pitches, And Get Noticed In Virtual Competitions.
    </p>
  
      <SearchForm query={query} />

    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All Startups"}
      </p>
      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post:StartUpTypeCard,index:number) => (
          <StartUpCard key={post?._id} post={post}/>
        ))
      ) : (
        <p className="no-results">No StartUp Founds</p>
      )}
      </ul>
    </section>
    </>
  );
}
