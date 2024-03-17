import type { Pattern } from "../common/ac";
export declare const InitialList: string[];
export declare const SpecialInitialList: string[];
export declare const SpecialFinalList: string[];
export declare const SpecialFinalMap: {
    uān: string;
    uán: string;
    uǎn: string;
    uàn: string;
    uan: string;
    uē: string;
    ué: string;
    uě: string;
    uè: string;
    ue: string;
    ūn: string;
    ún: string;
    ǔn: string;
    ùn: string;
    un: string;
    ū: string;
    ú: string;
    ǔ: string;
    ù: string;
    u: string;
};
export declare const doubleFinalList: string[];
export declare const PatternNumberDict: Pattern[];
export declare const SpecialChangeToneList: string[];
export declare function getSepecialChangeTone(cur: string, pre: string, next: string): string;
