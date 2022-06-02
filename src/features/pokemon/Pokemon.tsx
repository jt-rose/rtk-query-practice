import { useGetRandomPokemonQuery } from "./pokemonAPI";

export const Pokemon = () => {
  const { data, error, isLoading } = useGetRandomPokemonQuery(null);

  if (isLoading) {
    return <h1>...loading</h1>;
  }
  if (error) {
    return <h1>Error: Uh oh!</h1>;
  }
  return (
    <>
      <h1>Pokemon: {data.name}</h1>
      <ul>
        {(data.types as any[]).map((t) => (
          <li key={t.type.name}>{t.type.name}</li>
        ))}
      </ul>
    </>
  );
};
