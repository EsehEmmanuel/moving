import { TopTrend } from "./CardObj";
import { TopRating } from "./CardObj";
import { popular } from "./CardObj";
import { seriesData } from "./CardObj";

export const All = [...TopTrend, ...TopRating, ...popular, ...seriesData];
