const checkParity = (a) => {
  if (isNaN(a)) {
    console.log(`${a} not is number`);
  }

  if (a % 2 == 0) {
    console.log(`${a} is an even number`);
  }

  if (a % 2 != 0 && !isNaN(a)) {
    console.log(`${a} is odd`);
  }
};

checkParity("a");
checkParity(10);
checkParity(7);
