module.exports = {
  date_maker: (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date
      .getFullYear()
      .toString()
      .slice(-2)}`;
  },
};

// fromats date as M/DD/YY