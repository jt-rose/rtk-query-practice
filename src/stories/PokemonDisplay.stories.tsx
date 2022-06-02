import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokemonDisplay } from "../features/pokemon/Pokemon";

export default {
  title: "Pokemon-Display",
  component: PokemonDisplay,
  argTypes: {
    pokedata: {
      name: "Pikachu",
      types: [
        {
          type: {
            name: "electric",
          },
        },
      ],
    },
    refetch: () => {},
  },
};

const Template: ComponentStory<typeof PokemonDisplay> = (args) => (
  <PokemonDisplay {...args} />
);

export const Pikachu = Template.bind({});
Pikachu.args = {
  pokedata: {
    name: "Pikachu",
    types: [{ type: { name: "electric" } }],
  },
};

export const Eevee = Template.bind({});
Eevee.args = {
  pokedata: {
    name: "Eevee",
    types: [{ type: { name: "fire" } }],
  },
};
