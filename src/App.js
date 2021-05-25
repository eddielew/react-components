import "./App.css";
import User from "./components/User";
import faker from "faker";
import FollowCard from "./components/FollowCard";
import NewsCard from "./components/NewsCard";
import Card from "./components/Card";
import ContactFormCard from "./components/ContactFormCard";
import MediaStoryCard from "./components/MediaStoryCard";
import Form from "./components/Form";
import SignInOutForm from "./components/SignInOutForm";

function App() {
  return (
    <div className="App">
      <User userName="Chia Li" userPicture={faker.image.avatar()} />
      <User userName="Karol Kutka" userPicture={faker.image.avatar()} />
      <User userName="Firman" userPicture={faker.image.avatar()} />
      <User userName="Gregor" userPicture={faker.image.avatar()} />
      <FollowCard>
        <User userName="Irven" userPicture={faker.image.avatar()} />
      </FollowCard>
      <FollowCard>
        <User userName="Irven" userPicture={faker.image.avatar()} />
      </FollowCard>
      <FollowCard>
        <User userName="Irven" userPicture={faker.image.avatar()} />
      </FollowCard>
      <FollowCard>
        <User userName="Irven" userPicture={faker.image.avatar()} />
      </FollowCard>
      <ContactFormCard />
      <Form />
      <MediaStoryCard />
      <div className="grid">
        <Card cardPicture={faker.image.image()} />
        <Card cardPicture={faker.image.image()} />
        <Card cardPicture={faker.image.image()} />
        <Card cardPicture={faker.image.image()} />
        <Card cardPicture={faker.image.image()} />
        <Card cardPicture={faker.image.image()} />
      </div>
      <SignInOutForm />

      <NewsCard newsCardPicture={faker.image.image()} />
    </div>
  );
}

export default App;
