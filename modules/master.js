const MASTERS = () => ({
  // 求人ステータス
  ELEMENT_SYMBOL: [
    {
      text: "H",
      name: "Hydrogen (水素)",
      value: 1
    },
    {
      text: "He",
      name: "Helium (ヘリウム)",
      value: 2
    },
    {
      text: "Li",
      name: "Lithium (リチウム)",
      value: 3
    },
    {
      text: "Be",
      name: "Beryllium (ベリリウム)",
      value: 4
    },
    {
      text: "B",
      name: "Boron (ホウ素)",
      value: 5
    },
    {
      text: "C",
      name: "Carbon (炭素)",
      value: 6
    },
    {
      text: "N",
      name: "Nitrogen (窒素)",
      value: 7
    },
    {
      text: "O",
      name: "Oxygen (酸素)",
      value: 8
    },
    {
      text: "F",
      name: "Fluorine (フッ素)",
      value: 9
    },
    {
      text: "Ne",
      name: "Neon (ネオン)",
      value: 10
    }
  ]
});

export const m = name => MASTERS()[name];

export const getSymbol = (name, code) => {
  if (!m(name)) {
    return "";
  }
  const result = m(name).filter(a => {
    return a.value === code;
  });
  return result.length !== 0 ? result[0].text : code;
};

export const getName = (name, code) => {
  if (!m(name)) {
    return "";
  }
  const result = m(name).filter(a => {
    return a.value === code;
  });
  return result.length !== 0 ? result[0].name : code;
};
