import tweetme from "../../assets/projects_images/tweetme.PNG";
import chatapp from "../../assets/projects_images/chatapp.JPG";
import hardware_store from "../../assets/projects_images/hardware_store.jpg";
import portfolio from "../../assets/projects_images/portfolio.JPG";
import new_year from "../../assets/projects_images/new_year.jpg";
import color_classification from "../../assets/projects_images/color_classification.jpg";
import blinking from "../../assets/projects_images/blinking.JPG";
import COVID from "../../assets/projects_images/COVID.jpg";
import Dev_talks from "../../assets/projects_images/Dev_talks.jpg";

const data_projects = [
  {
    name: "Book Keeping App",
    image: chatapp,
    deployed_url: "",
    github_url: "https://github.com/anycatPP/BookKeeping",
    category: ["node", "mongo", "jwt", "react-redux", "react"],
  },

  {
    name: "Google Calendar Clone",
    image: tweetme,
    github_url: "https://github.com/anycatPP/GoogleCalendarClone",
    category: ["snowpack"],
  },

  {
    name: "Food Ordering ",
    image: hardware_store,
    deployed_url: "https://github.com/anycatPP/foodie",
    category: ["flutter"],
  },
];

export default data_projects;
