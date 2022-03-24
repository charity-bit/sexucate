let listItems = ["l1","l2","l3","l4","l5"];
  listItems.forEach((item) => {
    $(`.${item} a`).hover(
      () => {
        $(`.${item}-items`).css("opacity", 1);
      },
      () => {
        $(`.${item}-items`).css("opacity", 0);
      }
    );
  });