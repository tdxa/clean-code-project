import { useMediaQuery } from "@mui/material"
import { breakpointValuePx } from "./variables"

export const useIsMobile = (
  resolution: number = breakpointValuePx - 1
): boolean => useMediaQuery(`(max-width: ${resolution}px)`)
