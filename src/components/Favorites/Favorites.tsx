// import { useSelector } from "react-redux";
import {
  selectFavoritesNannies,
  selectIsLoading,
  selectNannies,
} from "../../redux/selectors";

import css from "./Favorites.module.css";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { INanny } from "../../types";
import NanniesCard from "../NanniesCard/NanniesCard";

const Favorites = () => {
  const nannies: INanny[] = useSelector(selectNannies);

  const isLoading = useSelector(selectIsLoading);

  const favorites = useSelector(selectFavoritesNannies);

  return (
    <>
      {favorites.length !== 0 ? (
        <div className={css.list}>
          {nannies
            ?.filter((nanny) => favorites.includes(nanny.name))
            .map((nanny) => (
              <NanniesCard key={nanny.name} nanny={nanny} />
            ))}
        </div>
      ) : (
        <p className={css.emptyFavorites}>Your favorite cars may be here!</p>
      )}
      {isLoading && !nannies && <Loader />}
    </>
  );
};

export default Favorites;
