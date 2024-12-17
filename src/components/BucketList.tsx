"use client";

interface BucketListItem {
  id: number;
  text: string;
  completed: boolean;
}

const bucketListItems: BucketListItem[] = [
  { id: 1, text: "learn to speak english fluently", completed: true },
  { id: 2, text: "live in the us", completed: false },
  { id: 3, text: "travel solo", completed: true },
  { id: 4, text: "run half a marathon", completed: false },
  { id: 5, text: "learn french", completed: false },
  { id: 6, text: "write a book", completed: false },
  { id: 7, text: "start a successful business", completed: false },
  { id: 8, text: "learn to play an instrument", completed: false },
  { id: 9, text: "visit japan", completed: false },
  { id: 10, text: "learn to cook authentic italian cuisine", completed: false },
  { id: 11, text: "complete a coding bootcamp", completed: true },
  { id: 12, text: "go skydiving", completed: false },
  { id: 13, text: "plant and maintain a garden", completed: false },
  { id: 14, text: "learn photography", completed: false },
  { id: 15, text: "master meditation", completed: false },
  {
    id: 16,
    text: "cross all of russia on a train from west to east",
    completed: false,
  },
  { id: 17, text: "do the interrail for a month", completed: false },
  { id: 18, text: "live in australia for a bit", completed: false },
  { id: 19, text: "get a driving license", completed: false },
  {
    id: 20,
    text: "try out digital nomading for a few months",
    completed: false,
  },
  { id: 21, text: "run the nyc marathon sub 3h", completed: false },
  { id: 22, text: "learn to surf", completed: false },
  { id: 23, text: "see the northern lights", completed: false },
  { id: 24, text: "learn to make sushi", completed: false },
  { id: 25, text: "visit all continents", completed: false },
  { id: 26, text: "learn to dance salsa", completed: false },
  { id: 27, text: "climb a mountain", completed: false },
  { id: 28, text: "learn sign language", completed: false },
  { id: 29, text: "ride a hot air balloon", completed: false },
  { id: 30, text: "swim with dolphins", completed: false },
  { id: 31, text: "learn to paint", completed: false },
  { id: 32, text: "write a song", completed: false },
  { id: 33, text: "build a treehouse", completed: false },
  { id: 34, text: "learn to juggle", completed: false },
  { id: 35, text: "go whale watching", completed: false },
  { id: 36, text: "learn to make pottery", completed: false },
  { id: 37, text: "see the pyramids", completed: false },
  { id: 38, text: "learn to skateboard", completed: false },
  { id: 39, text: "visit venice", completed: false },
  { id: 40, text: "learn to brew beer", completed: false },
  { id: 41, text: "see a broadway show", completed: false },
  { id: 42, text: "learn to sail", completed: false },
  { id: 43, text: "visit machu picchu", completed: false },
  { id: 44, text: "learn to rock climb", completed: false },
  { id: 45, text: "see the great wall", completed: false },
  { id: 46, text: "learn to scuba dive", completed: false },
  { id: 47, text: "ride a motorcycle", completed: false },
  { id: 48, text: "learn martial arts", completed: false },
  { id: 49, text: "see the taj mahal", completed: false },
  { id: 50, text: "learn to snowboard", completed: false },
  { id: 51, text: "visit santorini", completed: false },
  { id: 52, text: "learn to make bread", completed: false },
  { id: 53, text: "see a volcano", completed: false },
  { id: 54, text: "learn to code an app", completed: false },
  { id: 55, text: "visit the grand canyon", completed: false },
  { id: 56, text: "learn to ice skate", completed: false },
  { id: 57, text: "see the mona lisa", completed: false },
  { id: 58, text: "learn to play chess", completed: false },
  { id: 59, text: "visit iceland", completed: false },
  { id: 60, text: "house sit in hawaii", completed: false },
  { id: 61, text: "see the colosseum", completed: false },
  { id: 62, text: "learn to windsurf", completed: false },
  { id: 63, text: "visit new zealand", completed: false },
  { id: 64, text: "learn archery", completed: false },
  { id: 65, text: "see petra", completed: false },
  { id: 66, text: "learn to make wine", completed: false },
  { id: 67, text: "visit the amazon", completed: false },
  { id: 68, text: "learn to fly a drone", completed: false },
  { id: 69, text: "see the aurora australis", completed: false },
  { id: 70, text: "learn beekeeping", completed: false },
  { id: 71, text: "visit the dead sea", completed: false },
  { id: 72, text: "do 20 strict pull-ups in a row", completed: false },
  { id: 73, text: "visit 60 countries before 30", completed: false },
  { id: 74, text: "spend a month living in a monastery", completed: false },
  { id: 75, text: "volunteer for a meaningful cause", completed: false },
  { id: 76, text: "complete a 5 day fast", completed: false },
  { id: 77, text: "learn to code", completed: true },
  { id: 78, text: "make love on a plane", completed: false },
  { id: 79, text: "be the best man at a wedding of a close friend", completed: false },
  { id: 80, text: "experience the olympics live", completed: false },
  { id: 81, text: "experience the soccer world cup live", completed: false },
  { id: 82, text: "go paragliding in switzerland", completed: false },
  { id: 83, text: "try out skiing", completed: false },
  { id: 84, text: "give blood", completed: false },
  { id: 85, text: "learn to dance", completed: false },
  { id: 86, text: "learn how to play the guitar", completed: false },
  { id: 87, text: "learn french", completed: false },
  { id: 88, text: "learn spanish", completed: false },
  { id: 89, text: "learn german", completed: false },
  { id: 90, text: "build a 10m arr startup", completed: false },
  { id: 91, text: "buy my parents a house on the beach", completed: false },
  { id: 92, text: "open a restaurant in my 40s", completed: false },
  { id: 93, text: "go horse riding", completed: false },
];

export default function BucketList() {
  return (
    <div className="bucket-list mt-12">
      {bucketListItems.map((item) => (
        <div
          key={item.id}
          className={`bucket-item ${item.completed ? "completed" : ""}`}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
