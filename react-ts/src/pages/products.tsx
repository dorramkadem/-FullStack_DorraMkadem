import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import {
  Box,
  Grid,
  Image,
  Text,
  VStack,
  Spinner,
  Center,
} from "@chakra-ui/react";

export type Product = {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
};

const Products: React.FC = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"], // Query key
    queryFn: fetchProducts, // Query function
  });

  if (isLoading)
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );

  if (error) return <Text>Error loading products.</Text>;

  if (!data || data.length === 0) return <Text>No products found.</Text>;

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6} p={4}>
      {data.map((product) => (
        <Box
          key={product.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
        >
          <Image src={product.thumbnail} alt={product.name} />
          <VStack align="start" p={4}>
            <Text fontWeight="bold" fontSize="lg">
              {product.name}
            </Text>
            <Text color="green.500" fontSize="md">
              ${product.price}
            </Text>
          </VStack>
        </Box>
      ))}
    </Grid>
  );
};

export default Products;
