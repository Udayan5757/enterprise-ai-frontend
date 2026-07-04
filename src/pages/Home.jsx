import Navbar from "../components/Navbar";
import UploadBox from "../components/Uploadbox";
import ChatBox from "../components/Chatbox";

function Home() {
    return (
        <div className="page">
            <Navbar />
            <main className="main-content">
                <UploadBox />
                <ChatBox />
            </main>
        </div>
    );
}

export default Home;
