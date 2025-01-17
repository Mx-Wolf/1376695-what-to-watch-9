import {FilmsType} from '../../types/films';
import {Link} from 'react-router-dom';

type FilmCardProps = {
  film: FilmsType;
  onActivated: () => void;
  onDeactivated: () => void;
}

function FilmCard(props: FilmCardProps):JSX.Element {
  const {film, onActivated, onDeactivated} = props;

  return (
    <article
      onMouseEnter={() => onActivated()}
      onMouseLeave={() => onDeactivated()}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to="/films/12/review">
          <a style={{color: 'white'}} className="small-film-card__link" href="film-page.html">{film.title}</a>
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
