import { Actions } from "../../../constants/actions";

export const getNewsWallStreetJournal = () => {
  return {
    type: Actions.GET_NEWS_WALL_STREET_JOURNAL,
    payload: {
      client: "newsClient",
      request: {
        url: "top-headlines?sources=the-wall-street-journal",
      },
    },
  };
};
