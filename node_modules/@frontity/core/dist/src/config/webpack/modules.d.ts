import { Configuration } from "webpack";
import { Target, BabelConfigs, Mode } from "../../../types";
declare const _default: ({ target, babel, mode, }: {
    target: Target;
    babel: BabelConfigs;
    mode: Mode;
}) => Configuration["module"];
export default _default;
