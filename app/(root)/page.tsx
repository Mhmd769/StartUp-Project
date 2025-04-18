import SearchForm from "../../components/SearchForm";
import StartUpCard from "@/components/StartUpCard";
import { client } from "@/sanity/lib/client";
import { Startup_Query } from "@/sanity/lib/queries";
import { StartUpTypeCard } from "@/components/StartUpCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({searchParams}: {
  searchParams: Promise <{query?: string}>

}) {
  const query = (await searchParams).query;
  const params = {search:query || null}

  const {data : posts} = await sanityFetch({query : Startup_Query,params})

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
          posts.map((post:StartUpTypeCard) => (
          <StartUpCard key={post?._id} post={post}/>
        ))
      ) : (
        <p className="no-results">No StartUp Founds</p>
      )}
      </ul>
    </section>
    <SanityLive/>
    </>
  );
}
