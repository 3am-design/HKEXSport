// Next links handle basePath; native image URLs need the same prefix.
export const asset = (path) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
