// Team member images
import BreadCrumb from "@/components/common/Breadcrumb";
import Teams from "@/components/home-two/teams";
import Team1Img from "../../../public/images/team/team1.png";
import Team10Img from "../../../public/images/team/team10.png";
import Team11Img from "../../../public/images/team/team11.png";
import Team12Img from "../../../public/images/team/team12.png";
import Team2Img from "../../../public/images/team/team2.png";
import Team3Img from "../../../public/images/team/team3.png";
import Team4Img from "../../../public/images/team/team4.png";
import Team5Img from "../../../public/images/team/team5.png";
import Team6Img from "../../../public/images/team/team6.png";
import Team7Img from "../../../public/images/team/team7.png";
import Team8Img from "../../../public/images/team/team8.png";
import Team9Img from "../../../public/images/team/team9.png";


export const metadata = {
	title: "Best SEO & Digital Marketing Team | Meet Our Experts",
	description: "Meet our team of SEO strategists, PPC specialists, content marketers, and UI/UX experts driving digital growth and high-performing marketing campaigns.",
};

const teamsData = [
  {
    id: crypto.randomUUID(),
    name: "Andrew Mark",
    designation: "Creative Director",
    img: Team1Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Jack Taylor",
    designation: "Senior Designer",
    img: Team2Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Martine Joy",
    designation: "Project Manager",
    img: Team3Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Adam Straw",
    designation: "Web Developer",
    img: Team4Img,
  },
  {
    id: crypto.randomUUID(),
    name: "William Jack",
    designation: "Creative Director",
    img: Team5Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Alex Tom",
    designation: "UI/UX Designer",
    img: Team6Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Robin Lesser",
    designation: "Chief Executive Officer",
    img: Team7Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Sheikh David",
    designation: "HR Director",
    img: Team8Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Mark Strew",
    designation: "UI Designer",
    img: Team9Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Fradik Hazbag",
    designation: "Researcher",
    img: Team10Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Sam Kainiz",
    designation: "Lead Developer",
    img: Team11Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Mac Jackson",
    designation: "Marketing Expert",
    img: Team12Img,
  },
];
function Team() {
  return (
    <>
      <BreadCrumb title="Our Team" />
      <Teams teams={teamsData} />
    </>
  );
}

export default Team;
