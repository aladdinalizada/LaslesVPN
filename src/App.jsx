import { Helmet } from "react-helmet";
import MainPage from "./pages/Home/MainPage";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Helmet>
          <title>LaslesVPN | Home</title>
          <meta name="description" content="LaslesVPN Homepage" />
          <meta name="keywords" content="LaslesVPN, VPN, Homepage" />
          <meta name="author" content="LaslesVPN" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <MainPage />
      </div>
    </>
  );
}

export default App;
