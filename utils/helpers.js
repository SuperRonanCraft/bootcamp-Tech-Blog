const { User, Comment } = require('../models/index');

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
  includeData: [
    {
      model: User,
      attributes: {
        exclude: 'password',
      },
    },
    {
      model: Comment,
      include: [
        {
          model: User,
          attributes: {
            exclude: 'password',
          },
        },
      ],
      attributes: {
        exclude: 'password',
      },
    },
  ],
};
