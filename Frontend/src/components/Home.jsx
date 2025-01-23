import AnimatedContent from "../UI/AnimateContent";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import tree from "../assets/undraw_quiet-street_v45k.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen bg-green-700">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1713034434056-b798d3095be1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        />
        <AnimatedContent
          distance={80}
          direction="horizontal"
          reverse={false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.2}
          threshold={0.2}
        >
          <div className="mx-auto px-[180px] flex flex-col">
            <h1 className="text-6xl text-white text-left mt-[140px] py-10">
              AI Powered Urban Diversity Planner
            </h1>
            <h2 className="text-2xl w-3/4 font-thin text-left py-5 text-white">
              Reduce the time, effort, and cost of planning urban development
              and infrastructure projects, <br />
              while increasing confidence they will achieve desired outcomes.
            </h2>
            <button
              type="button"
              className="bg-white text-left w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-medium group my-4"
              onClick={() => navigate("/login")}
            >
              <div className="bg-green-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute right-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000000"
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  />
                  <path
                    fill="#000000"
                    d="M786.752 512 521.344 776.64a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L786.752 512z"
                  />
                </svg>
              </div>
              <p className="translate-x-2 pl-2">Get Started</p>
            </button>
          </div>
        </AnimatedContent>
      </div>

      {/* About Us Section */}
      <div className="relative min-h-screen bg-slate-900">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" />
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 30, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div className="flex items-center justify-between mx-[90px] ">
            <div className=" pt-40 relative z-10">
              <h1 className="text-5xl font-normal text-white">
                Where skyscrapers share space with thriving ecosystems,
              </h1>
              <p className="text-xl text-white mr-10 pt-20 pb-10">
                At EcoPolis, we're revolutionizing urban planning through the
                power of artificial intelligence to create cities that thrive in
                harmony with nature. Founded in 2025, our mission is to bridge
                the gap between urban development and biodiversity conservation,
                ensuring that our cities become sanctuaries for both people and
                wildlife.
              </p>
              <button className="btn btn-outline btn-success">
                Learn More
              </button>
            </div>

            <img src={tree} alt="Tree Illustration" className="w-1/3 mt-48" />
          </div>
        </AnimatedContent>
      </div>

      {/* Map Section */}
      <div className="relative min-h-screen bg-gray-100 py-10">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 30, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div className="text-center mx-auto ">
            <h2 className="text-4xl font-semibold text-gray-700">
              Our Urban Map
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Explore the cities we work with and their urban diversity.
            </p>
            <MapContainer
              center={[23.8144, 86.4412]}
              zoom={13}
              style={{ height: "500px", width: "80%", margin: "auto" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[23.8144, 86.4412]}>
                <Popup>A sample marker for our urban diversity projects.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </AnimatedContent>
      </div>

      {/* Analyze Section */}
      <div className="relative min-h-screen bg-green-800 py-10">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 30, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div className="text-right mx-auto mr-[180px] mt-[150px]">
            <h2 className="text-6xl font-semibold text-white">
              Analyze Urban Diversity
            </h2>
            <p className="text-2xl text-white mt-20 mb-8">
              We leverage advanced AI algorithms to analyze urban environments
              and biodiversity patterns.
              <br /> Our platform examines data from various sources, such as
              satellite imagery, city infrastructure, <br /> and ecosystem
              reports, to provide comprehensive insights.
            </p>
            <button className="btn btn-outline btn-light">Analyze Now</button>
          </div>
        </AnimatedContent>
      </div>

      {/* Upload Section */}
      <div className="relative min-h-screen bg-gray-200 py-10 ">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          config={{ tension: 30, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div className="text-center mx-auto ml-[180px] mr-[180px]">
            <h2 className="text-6xl font-semibold text-gray-700 my-20 mt-[150px]">
              Upload Your Data
            </h2>
            <p className="text-2xl text-gray-500 mb-8">
              Upload your project data, including blueprints, environmental
              surveys, and biodiversity reports, to our platform. Our AI-powered
              tools will process and analyze your files, offering actionable
              recommendations to help optimize urban planning strategies..
            </p>
            <input type="file" className="border-2 p-2 rounded-lg mb-4" />
            <button className="btn btn-outline btn-success">Upload</button>
          </div>
        </AnimatedContent>
      </div>
    </>
  );
}