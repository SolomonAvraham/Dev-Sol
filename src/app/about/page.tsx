export default function About() {
  return (
    <div className="min-h-screen ">
      <div className="h-40 rounded-b-xl flex items-center justify-center  bg-gradient-to-t from-[#f6b94f] via-[#eea236] to-[#edb200]">
        <div className="flex flex-wrap">
          <div className="text-xl ">About</div>
          <div className="text-3xl tracking-[0.1rem] font-bold">About</div>
          <div className="text-6xl tracking-[0.3rem] font-bold">About</div>
          <div className="text-xl ">About</div>
        </div>

        <div className="flex flex-wrap-reverse opacity-10">
          <div className="text-xl ">About</div>
          <div className="text-xl ">About</div>
          <div className="text-3xl tracking-[0.1rem] font-bold">About</div>
          <div className="text-6xl tracking-[0.3rem] font-bold">About</div>
        </div>
        {/* 
        <div className="text-8xl tracking-[1rem] font-bold">ABOUT</div>
        <div className="text-9xl tracking-[1rem] font-bold flex-initial">
          ABOUT
        </div> */}
      </div>
      <div className="flex flex-col gap-5 items-center mt-10">
        <div className="bg-black h-28 w-28 rounded-full mx-auto mt-5 xl:h-64 xl:w-64">
          <div className="bg-white h-[5.6rem] w-[5.6rem] rounded-full mx-auto mt-5 xl:h-64 xl:w-44"></div>
        </div>

        <h4 className="font-bold xs:text-xl xl:text-5xl">
          Solomon<span className="text-orange-400">Avraham</span>.
        </h4>

        <p className="p-5 text-center">
          <span>OAK HARBOR WEB DESIGNS </span>
          <br />
          Giving Small Businesses The Big Business Treatment My name is Ryan P,
          I am the owner and sole developer of Oak Harbor Web Designs. I got
          into programming after my wife had our first child. I was and still am
          a stay-at-home dad, and I wanted a career that I can do from home and
          still be there with the kids to watch them grow up. So over the course
          of two years I taught myself how to code websites the right way by
          hand and just started calling small businesses to offer my help. What
          I found was that a lot of small businesses don't have the funds to
          spend thousands of dollars upfront on a new website. And the ones that
          did, got taken advantage of and have a terrible website that looks
          like it was built by someone in a dungeon and haven't seen design
          trends for the last 10 years. They were in a frustrating spot - they
          either can't afford a good website, and if they can they don't know
          who to trust to make something great. So I tweaked my business model
          to fit their needs. That's how I came up with my $0 down and $150 a
          month model. It's more managable for a small business to handle and
          won't hurt their bank accounts.
        </p>
      </div>
    </div>
  );
}
