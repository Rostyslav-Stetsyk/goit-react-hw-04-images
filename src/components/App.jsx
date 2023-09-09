import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from 'utils/api-axios';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [cards, setCards] = useState([]);
  const [totalHits, setTotalHits] = useState(-1);
  const [loaderVisible, setLoaderVisible] = useState(false);

  useEffect(() => {
    if (!query) return;
    const queryForFetch = query.split('/')[1];

    const fetchImage = async () => {
      setLoaderVisible(true);
      const resp = await getImages(queryForFetch, page);
      setCards(prevCards => [...prevCards, ...resp.hits]);
      setTotalHits(resp.totalHits);
    };
    try {
      fetchImage();
    } catch {
      setError(true);
    } finally {
      setLoaderVisible(false);
    }
  }, [page, query]);

  const onSubmitQuery = value => {
    if (!value) return;

    const id = new Date();
    const query = `${id}/${value}`;

    setQuery(query);
    setCards([]);
    setError(false);
    setTotalHits(-1);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar
        onSubmitQuery={onSubmitQuery}
        setQuery={setQuery}
        query={query.split('/')[1]}
      />
      <Loader visible={loaderVisible} />
      {error || totalHits === 0 ? (
        <p>Error try again</p>
      ) : (
        <ImageGallery
          cards={cards}
          totalHits={totalHits}
          onLoadMore={onLoadMore}
        />
      )}
    </>
  );
};
