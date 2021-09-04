// 1. simple if

const isPrintable = true;

if (isPrintable) {
  console.log("1. I am printing");
}

// 2. if with logics check. Try || and set hasPaper to false.

const hasPaper = true;

if (isPrintable && hasPaper) {
  console.log("2. printing on paper");
}

// 3. mixture of && and ||

const isPDF = false;

if (isPrintable && (hasPaper || isPDF)) {
  console.log("3. printing on pdf or paper");
} else {
  console.log(
    "3. not printing because there is no paper and it is not printing PDF"
  );
}

// 4. Print with specific method (notice that when first "if" condition is met, it will not execute "else if" clause even if the condition is correct.)

if (isPrintable && hasPaper) {
  console.log("4. printing on paper");
} else if (isPrintable && isPDF) {
  console.log("4. printing on PDF");
} else {
  console.log("4. in the else clause");
}
