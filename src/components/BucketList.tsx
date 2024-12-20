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
  { id: 7, text: "buy & learn to use a DSLR camera", completed: false },
  { id: 8, text: "ride the Trans-Siberian railway", completed: false },
  { id: 9, text: "do europe by interrail for a month", completed: false },
  { id: 10, text: "try out living in australia for a few months", completed: false },
  { id: 11, text: "get a driving license", completed: false },
  { id: 12, text: "try out digital nomading for a few months",completed: true },
  { id: 13, text: "run the NYC marathon sub 3h", completed: false },
  { id: 14, text: "see the northern lights", completed: false },
  { id: 15, text: "learn to dance", completed: false },
  { id: 16, text: "ride a hot air balloon", completed: false },
  { id: 17, text: "learn to make sourdough bread", completed: false },
  { id: 18, text: "learn to code", completed: true },
  { id: 19, text: "learn to ice skate", completed: false },
  { id: 20, text: "visit iceland", completed: false },
  { id: 21, text: "visit new zealand", completed: false },
  { id: 22, text: "visit argentina", completed: false },
  { id: 23, text: "visit south africa", completed: false },
  { id: 24, text: "travel with my dad for a full month", completed: false },
  { id: 25, text: "housesitting in hawaii", completed: false },
  { id: 26, text: "float in the dead sea", completed: true },
  { id: 27, text: "ride a camel", completed: true },
  { id: 28, text: "hike in switzerland", completed: false },
  { id: 29, text: "do 20 strict pull-ups in a row", completed: false },
  { id: 30, text: "visit 60 countries before 30 (40/60)", completed: false },
  { id: 31, text: "spend a month living in a monastery", completed: false },
  { id: 32, text: "volunteer for a meaningful cause", completed: true },
  { id: 33, text: "complete a 5 day fast", completed: false },
  { id: 34, text: "make love on a plane", completed: false },
  { id: 35, text: "be the best man at a wedding", completed: false },
  { id: 36, text: "attend the Olympics live", completed: false },
  { id: 37, text: "watch a World Cup match live", completed: false },
  { id: 38, text: "go paragliding in Switzerland", completed: false },
  { id: 39, text: "try out skiing", completed: false },
  { id: 40, text: "give blood", completed: false },
  { id: 41, text: "learn how to play the guitar", completed: false },
  { id: 42, text: "learn spanish", completed: true },
  { id: 43, text: "learn german", completed: false },
  { id: 44, text: "build a 10m ARR startup", completed: false },
  { id: 45, text: "buy my parents a house on the beach", completed: false },
  { id: 46, text: "own a restaurant/cafe by 45", completed: false },
  { id: 47, text: "go horse riding", completed: false },
  { id: 48, text: "travel with a stranger", completed: true },
  { id: 49, text: "visit japan", completed: true },
  { id: 50, text: "visit japan during cherry blossom season", completed: false },
  { id: 51, text: "make love in the ocean at night", completed: false },
  { id: 52, text: "sleep in a glass igloo in lapland", completed: false },
  { id: 53, text: "eat lab grown meat", completed: false },
  { id: 54, text: "ride in a self-driving car", completed: false },
  { id: 55, text: "take a masterclass with a renowned chef", completed: false },
  { id: 56, text: "climb a 5000m mountain", completed: false },
  { id: 57, text: "do an ironman", completed: false },
  { id: 58, text: "learn to handstand", completed: false },
  { id: 59, text: "do a handstand pushup", completed: false },
  { id: 60, text: "be vegan for 6m", completed: true },
  { id: 61, text: "read 52 books in a year", completed: false },
  { id: 62, text: "backpack with my best friend", completed: false },
  { id: 63, text: "travel the world with the love of my life", completed: false },
  { id: 64, text: "take mom to paris", completed: true },
  { id: 65, text: "take mom to venice", completed: false },
  { id: 66, text: "get my first job as a self-taught developer", completed: true },
  { id: 67, text: "fall in love", completed: true },
  { id: 68, text: "have grandma visit me abroad", completed: false },
  { id: 69, text: "get a doggo (or 12 of them)", completed: false },
  { id: 70, text: "see Jungle and Still Woozy live with my best friend", completed: false },
  { id: 71, text: "see my mentor in person", completed: false }
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
