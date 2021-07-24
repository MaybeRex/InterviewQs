const getNumberOfOptions = (jeans, shoes, skirts, tops, dollars) => {
  let answers = [];

  const values = [shoes, skirts, tops];

  for (let i = 0; i < jeans.length; i += 1) {
    const pantCost = jeans[i];
    answers.push({ items: [pantCost], total: dollars - pantCost });
  }

  for (let i = 0; i < values.length; i += 1) {
    const itemList = values[i];

    const ansCopy = [];
    for (let k = 0; k < answers.length; k += 1) {
      const current = answers[k];
      for (let j = 0; j < itemList.length; j += 1) {
        const itemCost = itemList[j];
        ansCopy.push({ items: [...current.items, itemCost], total: current.total - itemCost });
      }
    }

    answers = [...ansCopy];
  }

  const filteredAnswers = [];

  for (let i = 0; i < answers.length; i += 1) {
    if (answers[i].total < 0) {
      continue;
    }

    filteredAnswers.push(answers[i]);
  }

  return filteredAnswers.length;
};

console.log(getNumberOfOptions([2,3], [4], [2,3], [1,2,3], 10));
