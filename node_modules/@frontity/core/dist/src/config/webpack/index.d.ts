import { Mode, WebpackConfigs, BabelConfigs, EntryPoints, FrontityConfig } from "../../../types";
declare const _default: ({ mode, babel, frontity, entryPoints, publicPath, }: {
    mode: Mode;
    babel: BabelConfigs;
    frontity: FrontityConfig;
    entryPoints: EntryPoints[];
    publicPath?: string;
}) => WebpackConfigs;
export default _default;
