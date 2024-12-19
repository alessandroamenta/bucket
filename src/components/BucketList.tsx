"use client";

interface BucketListItem {
  id: number;
  text: string;
  completed: boolean;
}

const bucketListItems: BucketListItem[] = [
  { id: 1, text: "learn english", completed: true },
  { id: 2, text: "live in the U.S.", completed: true },
  { id: 3, text: "travel solo", completed: true },
  { id: 4, text: "run half a marathon", completed: true },
  { id: 5, text: "run a marathon", completed: false },
  { id: 6, text: "learn french", completed: false },
  { id: 7, text: "start a successful business", completed: false },
  { id: 8, text: "buy & learn to use a DSLR camera", completed: false },
  { id: 9, text: "ride the Trans-Siberian railway", completed: false },
  { id: 10, text: "do europe by interrail for a month", completed: false },
  { id: 11, text: "try out living in australia for a few months", completed: false },
  { id: 12, text: "get a driving license", completed: false },
  { id: 13, text: "try out digital nomading for a few months",completed: true },
  { id: 14, text: "run the NYC marathon sub 3h", completed: false },
  { id: 15, text: "see the northern lights", completed: false },
  { id: 16, text: "learn to dance", completed: false },
  { id: 17, text: "climb a mountain", completed: false },
  { id: 18, text: "ride a hot air balloon", completed: false },
  { id: 19, text: "learn to make sourdough bread", completed: false },
  { id: 20, text: "learn to code", completed: true },
  { id: 21, text: "learn to ice skate", completed: false },
  { id: 22, text: "visit iceland", completed: false },
  { id: 23, text: "visit new zealand", completed: false },
  { id: 24, text: "visit argentina", completed: false },
  { id: 25, text: "visit south africa", completed: false },
  { id: 26, text: "travel with my dad for a full month", completed: false },
  { id: 27, text: "housesitting in hawaii", completed: false },
  { id: 28, text: "float in the dead sea", completed: true },
  { id: 29, text: "ride a camel", completed: true },
  { id: 30, text: "hike in switzerland", completed: false },
  { id: 31, text: "do 20 strict pull-ups in a row", completed: false },
  { id: 32, text: "visit 60 countries before 30 (40/195)", completed: false },
  { id: 33, text: "spend a month living in a monastery", completed: false },
  { id: 34, text: "volunteer for a meaningful cause", completed: true },
  { id: 35, text: "complete a 5 day fast", completed: false },
  { id: 36, text: "make love on a plane", completed: false },
  { id: 37, text: "be the best man at a wedding", completed: false },
  { id: 38, text: "attend the Olympics live", completed: false },
  { id: 39, text: "watch a World Cup match live", completed: false },
  { id: 40, text: "go paragliding in Switzerland", completed: false },
  { id: 41, text: "try out skiing", completed: false },
  { id: 42, text: "give blood", completed: false },
  { id: 43, text: "learn how to play the guitar", completed: false },
  { id: 44, text: "learn spanish", completed: true },
  { id: 45, text: "learn german", completed: false },
  { id: 46, text: "build a 10m ARR startup", completed: false },
  { id: 47, text: "buy my parents a house on the beach", completed: false },
  { id: 48, text: "own a restaurant/cafe by 45", completed: false },
  { id: 49, text: "go horse riding", completed: false },
  { id: 50, text: "travel with a stranger", completed: true },
  { id: 51, text: "visit japan", completed: true },
  { id: 52, text: "visit during cherry blossom season", completed: false },
  { id: 53, text: "make love in the ocean at night", completed: false },
  { id: 54, text: "sleep in a glass igloo in lapland", completed: false },
  { id: 55, text: "eat lab grown meat", completed: false },
  { id: 56, text: "ride in a self-driving car", completed: false },
  { id: 57, text: "take cooking classes from a Michelin star chef", completed: false },
  { id: 58, text: "climb a 5000m mountain", completed: false },
  { id: 59, text: "do an ironman", completed: false },
  { id: 60, text: "learn to handstand", completed: false },
  { id: 61, text: "handstand pushup", completed: false },
  { id: 62, text: "be vegan for 6m", completed: true },
  { id: 63, text: "read 52 books in a year", completed: false },
  { id: 64, text: "backpack with my best friend", completed: false },
  { id: 65, text: "travel the world with the love of my life", completed: false },
  { id: 66, text: "take mom to paris", completed: true },
  { id: 67, text: "take mom to venice", completed: false },
  { id: 68, text: "get my first job as a self-taught developer", completed: true },
  { id: 69, text: "fall in love", completed: true },
  { id: 70, text: "have grandma visit me abroad", completed: false },
  { id: 71, text: "get a doggo (or 12 of them)", completed: false },
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
