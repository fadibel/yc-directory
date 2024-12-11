import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "fadi" },
      _id: 1,
      description: "this is the discription",
      image:
        "data:image/jpeg;base64,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",
      category: "Robots",
      title: "we robots",
    },
  ];


  return (
    <>
      <section className="pink_container ">
        <h1 className="heading ">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
