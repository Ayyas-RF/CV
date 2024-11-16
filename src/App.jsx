import { useState } from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer.jsx";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Profile />
            <Footer />
        </>
    );
};

export default App;
