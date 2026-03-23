import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

type GraphQLError = { message: string; locations?: { line: number; column: number }[] };
type GraphQLResponse<T> = { data: T; errors?: GraphQLError[] };

const CRAFT_GRAPHQL_URL = process.env.NEXT_PUBLIC_CRAFT_GRAPHQL_URL;
if (!CRAFT_GRAPHQL_URL) throw new Error('NEXT_PUBLIC_CRAFT_GRAPHQL_URL is not set');

export const craftQuery = async <TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  const response = await fetch(CRAFT_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: print(document), variables: variables ?? undefined }),
  });

  if (!response.ok) throw new Error(`CraftCMS GraphQL request failed: ${response.status} ${response.statusText}`);

  const { data, errors } = (await response.json()) as GraphQLResponse<TResult>;
  if (errors?.length) throw new Error(errors.map(({ message }) => message).join(', '));

  return data;
};
