// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;
//John Profile
lastMonthPaidMoreThan4000 = 4001;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
isPlatinum = "Gold";
hasPromotion =
  (lastMonthPaidMoreThan4000 > 4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum == "Platinum";
console.log(hasPromotion);
