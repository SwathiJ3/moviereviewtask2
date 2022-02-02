import "./App.css";
import { useState } from "react";

//**************************************************

export default function App() {
  const users = [
    {
      profile:
        "https://w0.peakpx.com/wallpaper/568/61/HD-wallpaper-black-panther-2018-marvel-movie-poster-war.jpg",
      name: "BLACK PANTHER (2018)",
      summary:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place...",
      href: "https://www.rottentomatoes.com/m/black_panther_2018",
      rating: " 7.3"
    },
    {
      profile:
        "https://d9nvuahg4xykp.cloudfront.net/8971784826531255966/-833069146022734809.jpg",
      name: "AVENGERS: ENDGAME (2019)",
      summary:
        "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply...",
      href: "https://www.rottentomatoes.com/m/avengers_endgame",
      rating: " 8.4"
    },
    {
      profile:
        "https://m.media-amazon.com/images/M/MV5BZTc0OWQxOWQtNTNhNC00YWQ1LTlkMGEtZDMyNjA3NDcxYWU2XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_.jpg",
      name: "Black Widow (2021)",
      summary:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place...",
      href: "https://www.rottentomatoes.com/m/black_widow_2021",
      rating: " 6.7"
    },
    {
      profile:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
      name: "SPIDER-MAN: NO WAY HOME (2021)",
      summary:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place...",
      href: "https://www.rottentomatoes.com/m/spider_man_no_way_home",
      rating: " 8.7"
    },
    {
      profile:
        "https://www.themoviedb.org/t/p/original/beUKAkJE5gjjTMHYkaiE8uaZLEb.jpg",
      name: "THOR: RAGNAROK (2017)",
      summary:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place...",
      href: "https://www.rottentomatoes.com/m/thor_ragnarok_2017",
      rating: " 7.9"
    },
    {
      profile:
        "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/Spider-Man-FarFromHome-rating.jpg?itok=CGe-MMMn",
      name: " SPIDER-MAN: FAR FROM HOME (2019)",
      summary:
        "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
      href: "https://www.imdb.com/title/tt6320628/?ref_=adv_li_tt",
      rating: " 7.4 "
    },
   /* {
      profile:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_digitalkeyart-4.6mb.png",
      name: " CAPTAIN MARVEL (2019)",
      summary:
        "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races",
      href: "https://www.imdb.com/title/tt6320628/?ref_=adv_li_tt",
      rating: " 6.8 "
    },
    {
      profile:
        "https://i.ytimg.com/vi/wsv0Fv-OTIw/movieposter_en.jpg",
      name: "Captain America: The First Avenger (2011) ",
      summary:
        "Meek U.S. Army soldier Steve Rogers takes part in an experimental military program that infuses him with super-human powers, and uses his newfound strength to battle the villainous Red Skull.",
      href: "https://www.imdb.com/title/tt6320628/?ref_=adv_li_tt",
      rating: " 6.9 "
    }*/
  ];
  const [addmovie,setAddmovie]=useState(users);

  const [profile,setProfile]= useState("");
  const [name,setName]= useState("");
  const [rating,setRating]= useState("");
  const [summary,setSummary]= useState("");  
 
 

  return (
    <div className="App">
      
      
        <div className="Form">
             <input type="text" placeholder="Profile" onChange={(event) => setProfile(event.target.value)}/>
              <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)}/>
              <input type="text" placeholder="Rating" onChange={(event) => setRating(event.target.value)}/>
              <input type="text" placeholder="Summary" onChange={(event) => setSummary(event.target.value)}/>
            
            {/*copy the user array and add new movie to it}*/}

         {/*<button onClick={()=> console.log(name,poster,rating,summary)}>Add Movie</button>*/}

         <button onClick={()=>{
           const newMovie = {
            profile:profile, 
            name: name,
             rating: rating,
             summary: summary,
           };
           setAddmovie([...addmovie,newMovie]);
         } }>Add Movie</button>

      </div>

      <div className="aligncntnt">
        {users.map((usr) => (
          <Welcome
            name={usr.name}
            profile={usr.profile}
            summary={usr.summary}
            href={usr.href}
            rating={usr.rating}
          />
        ))}
      </div>
     
    </div>
  );
}

// displaying the value pf the object  in the browser to diplay everthing in the welcome:
function Welcome({ name, profile, summary, rating }) {
  //rating style:
  const rtstyles = {
    // backgroundColor: "green",
    color: rating > 8.5 ? "green" : "red"
  };
  return (
    <div className="welcome">
      <img className="movie-pic" src={profile} alt="movie poster" />
      <div className="nm-rtng">
        <h2>{name}</h2>
        <p style={rtstyles} className="movie-rating">
          <b>⭐ {rating}</b>
        </p>
      </div>
      <p className="summary">
        <b>Summary:</b> {summary}
        <a href=" {href} " target="_blank">
          [More]
        </a>
      </p>

      <Counter />
      
    </div>
  );
}

//button for like and dislike:
function Counter() {
  const [likes, setlikes] = useState(0);
  const [dislikes, setdislikes] = useState(0);
  return (
    <div className="btn">
      <button className="like" onClick={() => setlikes(likes + 1)}>
        👍 {likes}
      </button>
      <button className="dislike" onClick={() => setdislikes(dislikes + 1)}>
        👎 {dislikes}
      </button>
      
    </div>
  );
}
