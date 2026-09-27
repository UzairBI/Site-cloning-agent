export interface SpecNode {
    tag: string;
    text?: string;
    style?: Record<string, string | number>;
    attrs?: Record<string, string>;
    asset?: string;
    w?: number;
    h?: number;
    children?: SpecNode[];
}
export interface ResponsiveInfo {
    desktopCols: number;
    mobileCols: number;
    navLinksDesktop: number;
    navLinksMobile: number;
    menuButtonMobile: boolean;
    mobileHeight: number;
}
export interface SectionSpec {
    id: string;
    kind: string;
    name: string;
    rect: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    mobileRect?: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    fullBleed: boolean;
    gapBefore: number;
    align: "full" | "center" | "left";
    sticky: boolean;
    background?: string;
    heading?: string;
    node: SpecNode;
    truncated: boolean;
    responsive?: ResponsiveInfo;
}
export interface DesignTokens {
    primary: string;
    background: string;
    foreground: string;
    muted: string;
    surface: string;
    border: string;
    headingFont: string;
    bodyFont: string;
    radius: string;
    containerWidth: number;
}
export interface SiteSpec {
    url: string;
    finalUrl: string;
    title: string;
    description: string;
    lang: string;
    viewport: {
        w: number;
        h: number;
    };
    pageHeight: number;
    tokens: DesignTokens;
    fonts: string[];
    sections: SectionSpec[];
    assetCount: number;
}
export interface ManifestSection {
    id: string;
    name: string;
    kind: string;
    file: string;
    summary: string;
    sticky: boolean;
    source: "llm" | "fallback" | "added";
    score?: number;
}
export interface SiteManifest {
    slug: string;
    sourceUrl: string;
    title: string;
    description: string;
    lang: string;
    createdAt: string;
    updatedAt: string;
    tokens: DesignTokens;
    fonts: string[];
    sections: ManifestSection[];
    llm: {
        enabled: boolean;
        mainModel?: string;
        fastModel?: string;
    };
    usage: {
        calls: number;
        cachedCalls: number;
        promptTokens: number;
        completionTokens: number;
        costUsd: number;
    };
    similarity?: number;
    history: {
        at: string;
        prompt: string;
        summary: string;
        snapshot: string;
    }[];
}
export type JobEvent = {
    type: "stage";
    stage: string;
    message: string;
} | {
    type: "log";
    level: "info" | "warn" | "error";
    message: string;
} | {
    type: "analysis";
    data: unknown;
} | {
    type: "section";
    data: unknown;
} | {
    type: "score";
    data: unknown;
} | {
    type: "preview";
    url: string;
} | {
    type: "usage";
    data: unknown;
} | {
    type: "done";
    data: unknown;
} | {
    type: "failed";
    message: string;
};
