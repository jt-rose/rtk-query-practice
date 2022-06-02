import { useGetRandomPokemonQuery } from "./pokemonAPI";

export const PokemonDisplay = (props: {
  pokedata: { name: string; types: { type: { name: string } }[] };
  refetch: any;
}) => {
  return (
    <>
      <h1>Pokemon: {props.pokedata.name}</h1>
      <ul>
        {(props.pokedata.types as any[]).map((t) => (
          <li key={t.type.name}>{t.type.name}</li>
        ))}
      </ul>
      <button onClick={props.refetch}>Get New Pokemon</button>
    </>
  );
};

export const Pokemon = () => {
  const { data, error, isLoading, refetch } = useGetRandomPokemonQuery(null);

  if (isLoading) {
    return <h1>...loading</h1>;
  }
  if (error) {
    return <h1>Error: Uh oh!</h1>;
  }
  return <PokemonDisplay pokedata={data} refetch={refetch} />;
};
