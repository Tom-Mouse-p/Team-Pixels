// File: testdb/db.ts

import { signal } from "@preact/signals";

export const listings: any = signal("");

export function addListing(data: any) {
    listings.value = [...listings.value, data];
}

export function removeListing(listingToRemove: any) {
    listings.value = listings.value.filter(
        (listing: any) => listing !== listingToRemove
    );
}
