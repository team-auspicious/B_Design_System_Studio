export interface FoundationVersion {
    id: string;
    created_at: string;
    semantic_version: string;
    status: boolean;
}

export interface FoundataionDetail {
    color: Record<string, string>;
    created_at: string;
    foundation_id: string;
    id: string;
    spacing: Record<string, string>;
    typography: Record<string, string>;
}