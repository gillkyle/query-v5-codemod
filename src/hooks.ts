import { useMutation, useQuery } from "@tanstack/react-query";

// these custom mutation hooks required me to add mutationFn
export function useDeleteSomething(): any {
  return useMutation(({ groupId }: { groupId: string }) => {
    return fetch(`/api/groups/${groupId}`, {
      method: "DELETE",
    });
  });
}

// these custom query hooks required me to change some variable names and use the single object syntax
export function useDetails({ groupId }: { groupId?: string }): any {
  const cacheKey = ["details", groupId];
  const query = () => fetch(`/group/${groupId}`);
  const queryObject = useQuery(cacheKey, query, {
    enabled: !!groupId,
  });
  return queryObject;
}
