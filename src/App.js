import { useState } from "react";

import "./App.css";
export default function App(){
  const movielist=[
    {
      name:"Beast",
      poster:
        "https://moviegalleri.net/wp-content/uploads/2021/06/Thalapathy-65-Vijay-BEAST-Movie-First-Look-Poster-HD.jpg",
      rating:8,
      summary:
      "The tone and style of the Indian anti-terrorist action flick “Beast” varies wildly throughout, sometimes even within the same scene. This takes some getting used to, especially in a “Die Hard”-style siege thriller that’s also sometimes a musical-comedy about a handsome bachelor spy who also loves children and excels at dismembering and/or murdering terrorists."  
    },
    {
      name:"KGF-2",
      poster:
      "https://indiantelevision.com/sites/default/files/styles/230x230/public/images/tv-images/2022/04/07/img_07042022_145600_800_x_800_pixel.jpg?itok=04OoegcL",
      rating:7.5,
      summary:
      "The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",

    },
    {
      name:"Jai Bhim",
      poster:
      "https://i.pinimg.com/564x/d3/0c/fa/d30cfab18fdc8078944f843f52cf4e48.jpg",
      rating:9,
      summary:
      "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",

    },
    {
      name:"Kaathuvaakula Rendu Kaadhal",
      poster:
      "https://assetscdn1.paytm.com/images/cinema/2_4-648e8fa0-8bc7-11ec-a324-23682b4f5e45.jpg",
      rating:7.5,
      summary:
      "Kaathu Vaakula Rendu Kaadhal is the story of a man who does not find luck or love. A twist of fate forces him to choose between the woman he loves and the one who loves him.",

    },
    {
      name:"FIR",
      poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ2ZDk2NTMtYzg0ZC00NmIyLTk2ZTQtOTkzYzI1ZjM4YTJkXkEyXkFqcGdeQXVyMjA4OTI5NDQ@._V1_.jpg",
      rating:7,
      summary:
      "When an ordinary young man gets entangled in a terrorism case, he becomes evil in the eyes of the media and consequently the people. No one seems to consider that the truth can turn out to be different from what is perceived.",

    },
    {
      name:"Hey Sinamika",
      poster:
      "https://www.mixindia.com/wp-content/uploads/2022/02/Hey-Sinamika-Tamil-Movie-Poster-1.jpg",
      rating:7.5,
      summary:
      "Weather scientist Mouna falls in love with quirky and loving Yaazhan, but their relationship takes an unexpected turn when psychologist Dr. Malarvizhi arrives in town.A wife who feels suffocated by her husband's incessant attention hires a psychologist to make him fall in love with her so that she can separate from him.",
    },
    {
      name:"Etharkkum Thunindhavan",
      poster:
      "https://moviegalleri.net/wp-content/gallery/et-posters/Etharkkum-Thunindhavan-Posters-209bf4e.jpg",
      rating:8,
      summary:
      "When a lawyer uncovers a ruthless leader's criminal network that sexually exploits and threatens young women, he embarks on a bloody pursuit of justice.",

    },
    {
      name:"Valimai",
      poster:
      "https://igimages.gumlet.io/tamil/home/valimai_2092021_1.jpg?w=376&dpr=2.6",
      rating:7.6,
      summary:
      "A city witnesses a spike in its crime rate due to the nefarious activities of a notorious motorcycle club. When things get out of hand, it is up to Arjun, a police officer, to restore law and order.",
    }
  ]
  return(
    <div className="movielist">
      {movielist.map(({name,poster,rating,summary})=>(
        <Movie 
        name={name}
        poster={poster}
        rating={rating}
        summary={summary}/>
      ))}
    </div>
  );
}

function Movie({name,poster,rating,summary}){
  const styles={
    color:rating>8? "green":"red",

  };
  const [show,setShow]=useState(true);
  const summaryStyles={
    display:show?"block":"none"
  };
  return(<div className="movie-container">
    <img src={poster} alt={name} className="movie-poster"/>
    <div className="movie-cards">
      <h2 className="movie-name">{name}</h2>
      <p style={styles}className="movie-rating">⭐{rating}</p>
    </div>
    {/* <p className="movie-summary">{summary}</p> */}
    <button  className="btn" onClick={()=>setShow(!show)}>Toggle Description</button>
    <p style ={summaryStyles} className="movie-summary">{summary}</p>
  </div>
  );
}

// function Counter(){
  
//   const [like, setLike ]= useState(0);
//   const [dislike,setDisLike]=useState(0);
 
//   return(
//       <div>
//           <button onClick={()=> setLike(like+1)} >👍{like} </button>
//         <button onClick={()=>setDisLike(dislike+1)}>👎{dislike+1}</button>
//       </div>
      
         
     

//   );
// }

