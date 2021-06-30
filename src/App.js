import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import "./App.css";


const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="0f9a17df-651c-4927-8e33-14bb3bef9b94"
            userName="rohit"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;
