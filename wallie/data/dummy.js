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

export const BalanceData = [
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
    title: "H & M",
    icon: icons.hm,
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
    date: "12 November 2021",
    amount: "$ 50.00",
    title: "Top Up",
    icon: icons.plus,
  },
];

export default {
  featuresData,
  specialPromoData,
  profileOptions,
};
