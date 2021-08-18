function missHouseMeal(sideDishes) {
    let result = [];
    sideDishes.sort();
    const sidePowerSet = (idx, sideDish) => {
      if (idx === sideDishes.length) {
        result.push(sideDish);
        return;
      }
      sidePowerSet(idx + 1, sideDish);
      sidePowerSet(idx + 1, [...sideDish, sideDishes[idx]]);
    };
    sidePowerSet(0, []);
    return result.sort();
  }