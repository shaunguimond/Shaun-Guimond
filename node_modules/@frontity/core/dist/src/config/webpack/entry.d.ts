import { Configuration } from "webpack";
import { Target, Mode, EntryPoints } from "../../../types";
declare const _default: ({ target, mode, entryPoints, }: {
    target: Target;
    mode: Mode;
    entryPoints: EntryPoints[];
}) => Configuration["entry"];
export default _default;
