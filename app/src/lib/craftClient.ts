import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

const CRAFT_GRAPHQL_URL = process.env.NEXT_PUBLIC_CRAFT_GRAPHQL_URL!;

export const craftQuery = async <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  const response = await fetch(CRAFT_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: print(document), variables: variables ?? undefined }),
  });

  const json = await response.json();
  if (json.errors?.length) throw new Error(json.errors.map((e: { message: string }) => e.message).join(', '));
  return json.data;
};
