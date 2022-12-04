import React from "react";
import Headline from "../Home/Headline/Headline";

const Blog = () => {
  return (
    <div>
      <Headline></Headline>
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-normal font-bold text-white bg-red-500 py-2 px-4 my-4 shadow-lg shadow-slate-500 rounded w-1/3 text-center mx-auto">
        BLOG
      </h1>
      <div className="bg-slate-300 rounded-md w-11/12 mx-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-7 md:gap-4 gap-2 lg:p-10 md:p-6 p-2">
        <div>
          <p className="bg-slate-400 text-md py-1 px-3 rounded  font-semibold mb-1">
            Raising and educating orphans
          </p>
          <div className="bg-red-500 text-md  py-1 px-3 rounded bg-opacity-70 text-slate-100">
            <p>
              <span className="font-bold text-md text-slate-600">Answer: </span>
              The KHAN Foundation takes care of orphans on behalf of the
              well-to-do people. The Foundation carries out all the
              responsibilities for their upbringing and improved education from
              the sponsor. Raising an orphan does not mean nurturing him or her
              neglectfully; Rather, he should be raised according to his ability
              (much like his own child). That's why the Foundation provides
              quality food, medical care and education for an orphan from the
              sponsor. Taking care of the orphans in the hope of Allah's
              pleasure and reward is a significant act of worship and the best
              gift. Narrated Sahl bin Saad.
            </p>
          </div>
        </div>
        <div>
          <p className="bg-slate-400 text-md py-1 px-3 rounded mb-1 font-semibold">
            Distribution of relief to flood victims
          </p>
          <div className="bg-red-500 text-md  py-1 px-3 rounded bg-opacity-70 text-slate-100">
            <p>
              <span className="font-bold text-md text-slate-600"></span> During
              the monsoon season, about 26,000 sq km of Bangladesh is flooded
              every year. At this time, especially in the northern part of the
              country, in particular the Banavasi people are often the victims
              of extreme misery. The KHAN Foundation conducts relief activities
              every year in the flood-hit districts of the country and takes the
              initiative to stand by the needy and helpless people.The Prophet
              (peace and blessings of Allaah be upon him) said: Whoever relieves
              the suffering of a needy person,Under this program, an opportunity
              is created to stand by the side of needy and misery-stricken
              people and the above hadith is followed. Relief items include
              rice, pulses, oil, potatoes, chira, candles, gas lighters, food
              saline and water purification tablets.
            </p>
          </div>
        </div>
        <div>
          <p className="bg-slate-400 text-md py-1 px-3 rounded mb-1 font-semibold">
            Distribution of winter clothes
          </p>
          <div className="bg-red-500 text-md  py-1 px-3 rounded bg-opacity-70 text-slate-100">
            <p>
              <span className="font-bold text-md text-slate-600"></span> One of
              the teachings of Islam is human service. Every year, KHAN
              Foundation organizes a ‘Winter Clothing Distribution and Dawah
              Program’ to bring a little warmth to the helpless shivering
              cold-stricken people of remote areas. The Prophet (peace and
              blessings of Allaah be upon him) said, ‘Allaah, the Most Merciful,
              has mercy on the merciful. Be kind to the people of the earth, the
              inhabitants of the heavens will be kind to you. '(Sunan Abu
              Dawood: Hadith-4941; Sunan Tirmidhi, Hadith-1924) Over the last 3
              years, KHAN FOUNDATION has distributed about 22,335 winter clothes
              in 20 districts of the country including the northern part of the
              country. During the distribution of winter clothes in each spot,
              important discussions on the importance of Iman-Aqeedah,
              importance of Salat-Siam, ethics and honesty and special field of
              Da'wah books and leaflets were distributed through expert scholars
              and preachers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
