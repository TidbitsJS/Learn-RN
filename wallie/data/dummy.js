import { icons, COLORS, images } from "../constants";

export const featuresData = [
  {
    id: 1,
    icon: icons.reload,
    color: COLORS.purple,
    backgroundColor: COLORS.lightpurple,
    description: "Top Up",
  },
  {
    id: 2,
    icon: icons.send,
    color: COLORS.yellow,
    backgroundColor: COLORS.lightyellow,
    description: "Transfer",
  },
  {
    id: 3,
    icon: icons.internet,
    color: COLORS.primary,
    backgroundColor: COLORS.lightGreen,
    description: "Internet",
  },
  {
    id: 4,
    icon: icons.wallet,
    color: COLORS.red,
    backgroundColor: COLORS.lightRed,
    description: "Wallet",
  },
  {
    id: 5,
    icon: icons.bill,
    color: COLORS.yellow,
    backgroundColor: COLORS.lightyellow,
    description: "Bill",
  },
  {
    id: 6,
    icon: icons.game,
    color: COLORS.primary,
    backgroundColor: COLORS.lightGreen,
    description: "Games",
    route: "Games",
  },
  {
    id: 7,
    icon: icons.phone,
    color: COLORS.red,
    backgroundColor: COLORS.lightRed,
    description: "Mobile Prepaid",
  },
  {
    id: 8,
    icon: icons.more,
    color: COLORS.purple,
    backgroundColor: COLORS.lightpurple,
    description: "More",
  },
];

export const specialPromoData = [
  {
    id: 1,
    img: images.money,
    title: "Bonus Cashback",
    description: "Don't miss cashback. Grab instantly.",
  },
  {
    id: 2,
    img: images.gift,
    title: "Gift Cards",
    description: "Don't miss gift cards and vouchers.",
  },
  {
    id: 3,
    img: images.burger,
    title: "Food Offers",
    description: "Don't miss food offers. Enjoy your meal.",
  },
  {
    id: 4,
    img: images.store,
    title: "Shop Deals",
    description: "Don't miss shopping. Shop more",
  },
];

export const profileOptions = [
  {
    id: "prof-1",
    icon: icons.wallet,
    title: "Balance",
    description: "$ 115.00",
    route: "Balance",
  },
  {
    id: "prof-2",
    icon: icons.qrcode,
    title: "QR Code",
  },
  {
    id: "prof-3",
    icon: icons.barcode,
    title: "Barcode",
  },
  {
    id: "prof-4",
    icon: icons.password,
    title: "Password",
    description: "24****",
  },
  {
    id: "prof-5",
    icon: icons.fingerprint,
    title: "Fingerprint",
  },
  {
    id: "prof-6",
    icon: icons.email,
    title: "Email",
    description: "holmes@gmail.com",
  },
];

export const balanceData = [
  {
    id: 1,
    date: "15 November 2021",
    amount: "$ 47.34",
    title: "Burger King",
    icon: icons.burgerking,
  },
  {
    id: 2,
    date: "15 November 2021",
    amount: "$ 24.99",
    title: "ebay",
    icon: icons.ebay,
  },
  {
    id: 3,
    date: "15 November 2021",
    amount: "$ 12.00",
    title: "Starbucks",
    icon: icons.starbucks,
  },
  {
    id: 4,
    date: "14 November 2021",
    amount: "$ 12.50",
    title: "Netflix",
    icon: icons.netflix,
  },
  {
    id: 5,
    date: "14 November 2021",
    amount: "$ 50.00",
    title: "Top Up",
    icon: icons.plus,
    topUp: true,
  },
  {
    id: 6,
    date: "13 November 2021",
    amount: "$ 251.34",
    title: "Airbnb",
    icon: icons.airbnb,
  },
  {
    id: 25,
    date: "13 November 2021",
    amount: "$ 199.99",
    title: "McDonald's",
    icon: icons.mcdonald,
  },
  {
    id: 7,
    date: "13 November 2021",
    amount: "$ 12.00",
    title: "Coco Cola",
    icon: icons.cola,
  },
  {
    id: 8,
    date: "13 November 2021",
    amount: "$ 99.99",
    title: "Dish Tv",
    icon: icons.dishtv,
  },
  {
    id: 9,
    date: "12 November 2021",
    amount: "$ 45.77",
    title: "Nike",
    icon: icons.nike,
  },
  {
    id: 10,
    date: "11 November 2021",
    amount: "$ 35.23",
    title: "Notion",
    icon: icons.notion,
  },
  {
    id: 11,
    date: "11 November 2021",
    amount: "$ 345.50",
    title: "PlayStation",
    icon: icons.playstation,
  },
  {
    id: 12,
    date: "10 November 2021",
    amount: "$ 50.00",
    title: "Top Up",
    icon: icons.plus,
    topUp: true,
  },
  {
    id: 13,
    date: "10 November 2021",
    amount: "$ 251.34",
    title: "PVR Theatre",
    icon: icons.theatre,
  },
  {
    id: 14,
    date: "10 November 2021",
    amount: "$ 10.00",
    title: "Sprite",
    icon: icons.sprite,
  },
  {
    id: 15,
    date: "10 November 2021",
    amount: "$ 21.50",
    title: "Spotify",
    icon: icons.spotify,
  },
  {
    id: 16,
    date: "09 November 2021",
    amount: "$ 99.99",
    title: "Amazon",
    icon: icons.amazon,
  },
  {
    id: 17,
    date: "08 November 2021",
    amount: "$ 45.77",
    title: "Wattpad",
    icon: icons.wattpad,
  },
  {
    id: 18,
    date: "08 November 2021",
    amount: "$ 50.00",
    title: "Top Up",
    icon: icons.plus,
    topUp: true,
  },
  {
    id: 19,
    date: "07 November 2021",
    amount: "$ 35.23",
    title: "Netflix",
    icon: icons.netflix,
  },
  {
    id: 20,
    date: "07 November 2021",
    amount: "$ 345.50",
    title: "PlayStation",
    icon: icons.playstation,
  },
  {
    id: 21,
    date: "07 November 2021",
    amount: "$ 12.21",
    title: "Starbucks",
    icon: icons.starbucks,
  },
  {
    id: 22,
    date: "05 November 2021",
    amount: "$ 450.23",
    title: "Ebay",
    icon: icons.ebay,
  },
  {
    id: 23,
    date: "05 November 2021",
    amount: "$ 8.30",
    title: "Coco Cola",
    icon: icons.cola,
  },
  {
    id: 24,
    date: "05 November 2021",
    amount: "$ 99.99",
    title: "McDonald's",
    icon: icons.mcdonald,
  },
];

export const gamesData = [
  {
    title: "Popular Games",
    data: [
      {
        gameList: [
          {
            id: 1,
            title: "Call of Duty",
            imgUrl: images.callofduty,
          },
          {
            id: 2,
            title: "Age of Empires III",
            imgUrl: images.ageofempires,
          },
          {
            id: 3,
            title: "Cyberpunk",
            imgUrl: images.cyperpunk,
          },
          {
            id: 4,
            title: "Fry Cry 4",
            imgUrl: images.frycry4,
          },

          {
            id: 7,
            title: "Horizon 4",
            imgUrl: images.horizon4,
          },

          {
            id: 9,
            title: "Uncharted",
            imgUrl: images.uncharted4,
          },

          {
            id: 11,
            title: "Witcher III",
            imgUrl: images.witcher,
          },
          {
            id: 12,
            title: "Dishonored",
            imgUrl: images.dishonored,
          },
        ],
      },
    ],
  },
  {
    title: "Flash Games",
    data: [
      {
        gameList: [
          {
            id: 13,
            title: "Asphalt Legends",
            imgUrl: images.asphalt,
          },
          {
            id: 14,
            title: "Fortnite",
            imgUrl: images.fortnite,
          },
          {
            id: 15,
            title: "Plants Vs Zombies",
            imgUrl: images.plantsvszombies,
          },
          {
            id: 16,
            title: "Saints Row",
            imgUrl: images.saintsrow3,
          },
        ],
      },
    ],
  },
  {
    title: "Premium Games",
    data: [
      {
        gameList: [
          {
            id: 5,
            title: "Tom's Ghost Recon",
            imgUrl: images.ghostreckon,
          },
          {
            id: 6,
            title: "Grand Theft Auto",
            imgUrl: images.gta,
          },
          {
            id: 8,
            title: "Pubg Battlegrounds",
            imgUrl: images.pubg,
          },
          {
            id: 10,
            title: "Assasins Creed Valhalla",
            imgUrl: images.valhalla,
          },
          {
            id: 11,
            title: "Assasins Creed Valhalla",
            imgUrl: images.valhalla,
          },
        ],
      },
    ],
  },
];

export default {
  featuresData,
  specialPromoData,
  profileOptions,
  balanceData,
  gamesData,
};
