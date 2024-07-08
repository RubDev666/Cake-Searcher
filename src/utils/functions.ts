import { Categories } from "@/types/api";
import { db } from "./db";

export function getAllCategories(): Categories[] {
    let categories: Set<Categories> = new Set([]);

    db.forEach((cake) => categories.add(cake.category));

    return Array.from(categories);
}
