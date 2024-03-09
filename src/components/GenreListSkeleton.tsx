import { Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = ({ count }: { count: number }) => {
  const arr = Array.from({ length: count }, () => "a");
  return (
    <>
      {arr.map((item, idx) => (
        <Skeleton
          key={item + idx}
          height={10}
          width={200}
          marginY={5}
          borderRadius="10px"
        />
      ))}
    </>
  );
};

export default GenreListSkeleton;
