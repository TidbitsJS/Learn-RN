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
    img: images.promoBanner,
    title: "Bonus Cashback1",
    description: "Don't miss it. Grab it now!",
  },
  {
    id: 2,
    img: images.promoBanner,
    title: "Bonus Cashback2",
    description: "Don't miss it. Grab it now!",
  },
  {
    id: 3,
    img: images.promoBanner,
    title: "Bonus Cashback3",
    description: "Don't miss it. Grab it now!",
  },
  {
    id: 4,
    img: images.promoBanner,
    title: "Bonus Cashback4",
    description: "Don't miss it. Grab it now!",
  },
];

export default {
  featuresData,
  specialPromoData,
};
