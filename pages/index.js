import Link from "next/link";
import Fragment from "react";
import MainHeroComponent from "../components/heroSection/mainherocomponent";
import TopProjects from "../components/TopProjects/TopProjects";
import Skills from "../components/skills/Skills";


const test_image =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-8251f.appspot.com/o/Screenshot%202022-04-24%20133920.png?alt=media&token=d845498f-2386-42c3-a768-ef6f104ac653";

  const top_projects = [
  {
    title: "Project 1",
    image: test_image,
    about: "TSTIMG",
    link: "/project1",
    Rank: 1,
  },
  {
    title: "Project 2",
    image: test_image,
    about: "TSTIMG",
    link: "/project1",
    Rank: 2,
  },
  {
    title: "Project 3",
    image: test_image,
    about: "TSTIMG",
    link: "/project1",
    Rank: 3,
  },
];


function HomePage(props){
  return (
    <div>
      <MainHeroComponent />
      <TopProjects props={top_projects} />
      <Skills />
    </div>
  );

}


export default HomePage;
