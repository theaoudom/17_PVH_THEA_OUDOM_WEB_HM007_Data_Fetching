import AllMovieComponent from "@/components/AllMovieComponent";
import GenreMovieComponent from "@/components/GenreMovieComponent";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <main className="bg-red-950 overflow-hidden">
        <div className="w-screen h-screen relative overflow-hidden">
          <div className="bg-orange-950 w-full h-full absolute"></div>
          <img src="../bg_movie.png" className="w-full h-full opacity-65"/>
        </div>
        <div className="px-[68px] py-5">
          <div>
            <AllMovieComponent />
          </div>
          <div>
            <GenreMovieComponent/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
