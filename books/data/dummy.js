import {
  bookAtomicHabits,
  bookCantHurtMe,
  bookChamberOfSecrets,
  bookDaVinciCode,
  bookEverythingIsFked,
  bookFaultInOurStars,
  bookFortyRulesOfLove,
  bookImmortalsOfMeluha,
  bookOtherWordsForHome,
  bookSita,
  bookSubtleArtOfNotGivingAFked,
  bookTheMetropolis,
  bookThePalaceOfIllusions,
  bookTheTinyDragon,
  bookWishICouldTellYou,
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
    ],
  },
];

export const profileData = {
  name: "Enola Holmes",
  point: 200,
};
