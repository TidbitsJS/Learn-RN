import { icons } from "../constants";

import {
  bookOtherWordsForHome,
  bookTheMetropolis,
  bookTheTinyDragon,
  bookAtomicHabits,
  bookCantHurtMe,
  bookEverythingIsFked,
  bookFaultInOurStars,
  bookFortyRulesOfLove,
  bookImmortalsOfMeluha,
  bookSita,
  bookSubtleArtOfNotGivingAFked,
  bookThePalaceOfIllusions,
  bookWishICouldTellYou,
  bookChamberOfSecrets,
  bookDaVinciCode,
  bookTheHobbit,
  bookAshesToMagic,
  bookEgoIsTheEnemy,
  bookElementsOfGate,
  bookInfluence,
  bookKingdomOfCopper,
  bookMonkFerrari,
  bookNarashima,
  bookPerfectUs,
  bookPrioryOfOrangeTree,
  bookRealmOfBeasts,
  bookUnderland,
} from "./books";

export const myBooksData = [
  {
    ...bookAtomicHabits,
    completion: "75%",
    lastRead: "3d 5h",
  },
  {
    ...bookSita,
    completion: "23%",
    lastRead: "10d 5h",
  },
  {
    ...bookFortyRulesOfLove,
    completion: "10%",
    lastRead: "1d 2h",
  },
  {
    ...bookThePalaceOfIllusions,
    completion: "24%",
    lastRead: "4d 7h",
  },
];

export const categoriesData = [
  {
    id: 1,
    categoryName: "Best Seller",
    books: [
      bookOtherWordsForHome,
      bookTheMetropolis,
      bookTheTinyDragon,
      bookCantHurtMe,
      bookDaVinciCode,
      bookFaultInOurStars,
      bookSubtleArtOfNotGivingAFked,
    ],
  },
  {
    id: 2,
    categoryName: "The Latest",
    books: [
      bookTheMetropolis,
      bookEverythingIsFked,
      bookWishICouldTellYou,
      bookImmortalsOfMeluha,
      bookUnderland,
    ],
  },
  {
    id: 3,
    categoryName: "Coming Soon",
    books: [
      bookTheTinyDragon,
      bookChamberOfSecrets,
      bookFortyRulesOfLove,
      bookTheMetropolis,
      bookAtomicHabits,
      bookTheHobbit,
    ],
  },
];

export const profileData = {
  name: "Enola Holmes",
  point: 200,
};

export const discoverBooksTag = [
  {
    title: "Best Seller",
    total: 3452,
    icon: icons.bestseller,
  },
  {
    title: "Bookstore",
    total: 8745,
    icon: icons.bookstore,
  },
  {
    title: "Fiction",
    total: 1234,
    icon: icons.fiction,
  },
  {
    title: "Non-Fiction",
    total: 987,
    icon: icons.fiction,
  },
];

export const discoverBooks = [
  bookAshesToMagic,
  bookKingdomOfCopper,
  bookNarashima,
  bookPerfectUs,
  bookPrioryOfOrangeTree,
  bookRealmOfBeasts,
  bookTheMetropolis,
  bookInfluence,
  bookElementsOfGate,
  bookTheHobbit,
  bookDaVinciCode,
  bookEgoIsTheEnemy,
  bookOtherWordsForHome,
  bookMonkFerrari,
  bookTheTinyDragon,
  bookAtomicHabits,
  bookCantHurtMe,
  bookEverythingIsFked,
  bookFaultInOurStars,
  bookFortyRulesOfLove,
  bookImmortalsOfMeluha,
  bookSita,
  bookSubtleArtOfNotGivingAFked,
  bookThePalaceOfIllusions,
  bookWishICouldTellYou,
  bookChamberOfSecrets,
  bookUnderland,
];
