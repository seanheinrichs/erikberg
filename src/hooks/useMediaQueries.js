import { useMediaQuery } from "@mui/material";

export const useMediaQueries = () => {
  const isPortrait = window.innerHeight > window.innerWidth;
  const isDesktop = useMediaQuery(`(min-${isPortrait ? "width" : "height"}:600px)`);

  const isMobileLandscape = !isPortrait && !isDesktop;
  const isMobilePortrait = isPortrait && !isDesktop;

  return { isMobileLandscape, isMobilePortrait };
};
