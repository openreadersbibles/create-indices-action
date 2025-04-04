export declare class PublicationFootnoteElement {
    private _markers;
    private _text;
    constructor(marker: string, text: string);
    get text(): string;
    addMarker(marker: string): void;
    markerText(): string;
}
