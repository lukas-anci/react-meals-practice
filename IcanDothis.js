const items = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    amount: 1,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    amount: 4,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    amount: 6,
  },
];

function decrOne(arr, id) {
  const findItem = arr.find((item) => item.id === id);
  if (findItem.amount > 1) {
    const obj = { ...findItem, amount: findItem.amount - 1 };
    console.log(obj);
  }
}

function deleteOrDecrese(arr, id) {
  let updatedItems;
  const findItem = arr.find((item) => item.id === id);

  if (findItem.amount > 1) {
    updatedItems = arr.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount - 1,
        };
      }
      return item;
    });
  } else if (findItem.amount === 1) {
    // grazinam masyva be rasto item
    updatedItems = arr.filter((item) => item.id !== id);
  }
  console.log({ updatedItems });
}

deleteOrDecrese(items, 'm2');
