export const appState = {

  searchParam: "",
  filteredRecipes: [],

  title: "Nagyi receptjei",
  description: "Összegyűjtöttem mert finomak",
  recipes: [
    {
      title: "spenót tükörtojással",
      isVega: true,
      ingredients: [
        { name: "spenót", amount: "10dkg" },
        { name: "tojás", amount: "2 db" },
        { name: "só", amount: "1 ek" },
      ],
      description: "Ezt csináld meg azt",
    },
    {
      title: "brassói aprópecsenye",
      isVega: false,
      ingredients: [
        { name: "krumpli", amount: "10dkg" },
        { name: "sertéshús", amount: "20 dkg" },
        { name: "bors", amount: "1 ek" },
      ],
      description: "Itt meg valami mást",
    },
  ]
}
