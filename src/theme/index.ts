import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import {
  colorTokens,
  fontSizeTokens,
  fontTokens,
  fontWeightTokens,
  radiiTokens,
  shadowTokens,
  sizeTokens,
  spacingTokens,
  textStyles,
} from "./tokens"
import {
  headerActionButtonRecipe,
  primaryAddButtonRecipe,
  primaryEventActionRecipe,
} from "./recipes/action-buttons"

const config = defineConfig({
  preflight: false,
  theme: {
    tokens: {
      colors: colorTokens,
      spacing: spacingTokens,
      sizes: sizeTokens,
      radii: radiiTokens,
      shadows: shadowTokens,
      fonts: fontTokens,
      fontSizes: fontSizeTokens,
      fontWeights: fontWeightTokens,
    },
    textStyles,
    recipes: {
      headerActionButton: headerActionButtonRecipe,
      primaryAddButton: primaryAddButtonRecipe,
      primaryEventAction: primaryEventActionRecipe,
    },
  },
})

export const system = createSystem(defaultConfig, config)
