import { promises } from "dns";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {
  searchParams: Promise <{query?: string}>

}) {
  const query = (await searchParams).query;
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
    </>
  );
}
