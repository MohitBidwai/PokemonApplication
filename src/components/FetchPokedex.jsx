import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons, setLoading, setError } from '../store/pokemonSlice';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

function FetchPokedex() {
  const dispatch = useDispatch();
  const { loading, pokemons } = useSelector(state => state.pokemon);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [search, setSearch] = useState("");

  const fetchAllPokemon = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    let allPokemon = [];
    let nextUrl = POKEAPI_URL;
    let total = 0;
    let current = 0;
    try {
      const firstRes = await fetch(nextUrl).then(res => res.json());
      total = firstRes.count;
      nextUrl = firstRes.next;
      allPokemon = [...firstRes.results];
      current = allPokemon.length;
      setProgress({ current, total });
      while (nextUrl) {
        const res = await fetch(nextUrl).then(r => r.json());
        allPokemon = [...allPokemon, ...res.results];
        nextUrl = res.next;
        current = allPokemon.length;
        setProgress({ current, total });
      }
      dispatch(setPokemons(allPokemon));
    } catch (err) {
      dispatch(setError('Failed to fetch data'));
    }
    dispatch(setLoading(false));
  };

  return (
    <div className="my-4">
      <button
        className="bg-green-600 text-white px-4 py-2 rounded shadow"
        onClick={fetchAllPokemon}
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Fetch Full Pokedex Dataset'}
      </button>
      {loading && (
        <div className="mt-2 text-sm text-gray-700">
          Fetched {progress.current} / {progress.total} Pokémon...
        </div>
      )}
      {!loading && pokemons.length > 0 && (
        <>
          <div className="mt-2 text-sm text-green-700">
            Fetched {pokemons.length} Pokémon!
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="mb-4 p-2 border rounded w-full max-w-md"
              placeholder="Search Pokémon by name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <h2 className="text-lg font-bold mb-2">Pokémon List</h2>
            <ul className="max-h-96 overflow-y-auto border rounded p-2 bg-white shadow">
              {pokemons
                .filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))
                .map((poke, idx) => {
                  const idMatch = poke.url.match(/\/pokemon\/(\d+)/);
                  const pokeId = idMatch ? idMatch[1] : null;
                  const spriteUrl = pokeId
                    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
                    : null;
                  return (
                    <li key={poke.name} className="flex items-center py-1 border-b last:border-b-0">
                      {spriteUrl && (
                        <img src={spriteUrl} alt={poke.name} className="w-8 h-8 mr-2" />
                      )}
                      <span>{idx + 1}. {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default FetchPokedex;
